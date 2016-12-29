console.log("hello world")

function socksend(socket, eventname,message){
	sendarray = "["+eventname+","+JSON.stringify(message)+"]"
	console.log(sendarray)
	socket.send(sendarray)
}
var ws = new WebSocket("ws://localhost:8000/ws");
var mouse = {x:0,y:0}
var mouseStart = {x:0,y:0}
var mouseDiff = {x:0,y:0}
var sensitivity = 5;
var mouseDown = false;


window.addEventListener("mousedown", function(){
	mouseDown = true
})

window.addEventListener("mouseup", function(){
	mouseDown = false;
})


window.onload = function(){

	var trackpadElement = document.getElementById("trackpad");
	trackpadElement.addEventListener("mousemove",function(e){
		mouse.x = e.clientX;
		mouse.y = e.clientY;

		mouseDiff.x = mouse.x - mouseStart.x;
		mouseDiff.y = mouse.y - mouseStart.y;

		console.log(mouseDiff);

		if(mouseDown){
			socksend(ws, "move", mouseDiff);
		}

		mouseStart.x = mouse.x;
		mouseStart.y = mouse.y;
	})
}
