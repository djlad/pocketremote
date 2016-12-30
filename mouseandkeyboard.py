import sys
import time 
#from pymouse import PyMouse
#from pykeyboard import PyKeyboard 
import pyautogui

class kbMouse:

	def __init__(self):
            print "keyboard and mouse initilized"

	def click(self):
            x_dim,y_dim = self.mouse.screen_size()
            (x,y) = self.mouse.position() 
            self.mouse.click(x,y,1)

	def move_mouse(self, dx, dy):
            """
            takes change in x and y
            moves mouse by this amount
            """
            print "moving mouse"
            pyautogui.moveRel(dx, dy)
	
	#Doesn't work gotta add keylistener
	def type(self,key):
		self.keyboard.press_key(k.key)
		time.sleep(0.2)
		self.keyboard.release_key(k.key)
	
