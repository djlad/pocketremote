console.log("hello world")

function socksend(socket, eventname,message){
	sendarray = "[\""+eventname+"\" ,"+JSON.stringify(message)+"]"
	//alert(sendarray);
	q = sendarray;
	socket.send(sendarray);
}
var ws = new WebSocket("ws://192.168.1.6:8000/ws");
var mouse = {x:0,y:0}
var mouseStart = {x:0,y:0}
var mouseDiff = {x:0,y:0}
var sensitivity = 3;
var mouseDown = false;

var mouseUpdateCount = 0;
var maxUpdateCounts = 4;


window.addEventListener("mousedown", function(){
	mouseDown = true;
})

window.addEventListener("touchstart", function(e){
	mouseStart.x = e.touches[0].pageX;
	mouseStart.y = e.touches[0].pageY;
	mouseDown = true;
})

window.addEventListener("mouseup", function(){
	mouseDown = false;
})

window.addEventListener("touchend", function(){
	mouseDown = false;
})


window.onload = function(){

	var trackpadElement = document.getElementById("trackpad");
	var leftClickElement = document.getElementById("leftmouse");
	var rightClickElement = document.getElementById("rightmouse");

	trackpadElement.addEventListener("mousemove", updateMousePosition);
	trackpadElement.addEventListener("touchmove", updateMousePosition);

	leftmouse.addEventListener("click",function(){sendClick(true)});
	rightmouse.addEventListener("click",function(){sendClick(false)});
}

function updateMousePosition(e){
		eventType = e.type=="mousemove";
		mouse.x = eventType?e.clientX:e.touches[0].pageX;
		mouse.y = eventType?e.clientY:e.touches[0].pageY;
		//mouse.x = e.touches[0].pageX;
		//mouse.y = e.touches[0].pageY;


		mouseDiff.x = (mouse.x - mouseStart.x)*sensitivity;
		mouseDiff.y = (mouse.y - mouseStart.y)*sensitivity;

		//alert("at if statement")
		
		if(mouseDown){
			if(mouseUpdateCount == 0)
				socksend(ws, "move", mouseDiff);
			mouseUpdateCount++;
			mouseUpdateCount = mouseUpdateCount % maxUpdateCounts;
		}

		mouseStart.x = mouse.x;
		mouseStart.y = mouse.y;
	
}

function sendClick(leftClick){
	/*tells server to click.*/
	//console.log("leftclick")
	socksend(ws, "click", leftClick);
}