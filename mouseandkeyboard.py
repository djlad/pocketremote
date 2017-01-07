import sys
import time 
#from pymouse import PyMouse
#from pykeyboard import PyKeyboard 
import pyautogui

class kbMouse:

	def __init__(self):
            print "keyboard and mouse initilized"

	def click(self, isLeftClick):
		#isleftclick is bool determining left or right click
		buttons = "left"

		if not isLeftClick:
			buttons = "right"
		pyautogui.click(button=buttons)

	def move_mouse(self, dx, dy):
            """
            takes change in x and y
            moves mouse by this amount
            """
            pyautogui.moveRel(dx, dy, 0)
	
	#Doesn't work gotta add keylistener
	def type(self,key):
		self.keyboard.press_key(k.key)
		time.sleep(0.2)
		self.keyboard.release_key(k.key)
	
