console.log("hello world")

function socksend(socket, eventname,message){
	sendarray = "[\""+eventname+"\" ,"+JSON.stringify(message)+"]"
	alert(sendarray);
	q = sendarray;
	socket.send(sendarray);
}
var ws = new WebSocket("ws://localhost:8000/ws");
var mouse = {x:0,y:0}
var mouseStart = {x:0,y:0}
var mouseDiff = {x:0,y:0}
var sensitivity = 5;
var mouseDown = false;


window.addEventListener("mousedown", function(){
	mouseDown = true;
})

window.addEventListener("touchstart", function(){
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
	trackpadElement.addEventListener("mousemove", updateMousePosition);
	trackpadElement.addEventListener("touchmove", updateMousePosition);
}
alert(1)
function updateMousePosition(e){
		eventType = e.type;
		mouse.x = eventType?e.clientX:e.touches[0].pageX;
		mouse.y = eventType?e.clientY:e.touches[0].pageY;


		mouseDiff.x = mouse.x - mouseStart.x;
		mouseDiff.y = mouse.y - mouseStart.y;

		//alert("at if statement")
		//alert(mouseDown)
		if(mouseDown){
			alert("in if")
			alert(mouseDif)
			socksend(ws, "move", mouseDiff);
		}

		mouseStart.x = mouse.x;
		mouseStart.y = mouse.y;
	}