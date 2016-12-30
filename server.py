import mouseandkeyboard
import tornado.web
import tornado.websocket
import tornadio2
import json

mousekeyboard = mouseandkeyboard.kbMouse()

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("phone.html")


class phonejsHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("phone.js")

class WebSocketHandler(tornado.websocket.WebSocketHandler):

    def on_message(self, message):
        event = json.loads(message)[0]
        message = json.loads(message)[1]

        if event == "move":
            #message is object containing mouse coords
            print "move"
            mousekeyboard.move_mouse(message["x"], message["y"])
            
	    

def make_app():
    return tornado.web.Application([
        (r"/", MainHandler),
        (r"/remotecontrol.js", phonejsHandler),
        (r"/ws", WebSocketHandler)
    ])

if __name__ == "__main__":
    app = make_app()
    app.listen(8000)
    tornado.ioloop.IOLoop.current().start()

    #MyRouter = tornadio2.TornadioRouter(WebSocketHandler)
    #application = tornado.web.Application(
    #MyRouter.urls,
    #socket_io_port = 8000)
