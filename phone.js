console.log("hello world")

function socksend(socket, eventname,message){
	sendarray = "["+eventname+","+JSON.stringify(message)+"]"
	console.log(sendarray)
	socket.send(sendarray)
}
var ws = new WebSocket("ws://localhost:8000/ws");
var mouse = {x:0,y:0}
window.addEventListener("mousemove",function(e){
	mouse.x = e.clientX;
	mouse.y = e.clientY;
	socksend(ws, "move", mouse)
})
