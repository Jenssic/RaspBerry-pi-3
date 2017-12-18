import RPi.GPIO as GPIO
import threading
import time 
from sys import argv
print argv[1]


GPIO.setmode(GPIO.BCM)
GPIO.setup(17, GPIO.OUT)
if argv[1] == 'open':
	GPIO.output(17, GPIO.HIGH)
elif argv[1] == 'close':
	GPIO.output(17, GPIO.LOW)
elif argv[1] == 'smooth':
	p = GPIO.PWM(17, 50)
	p.start(0)
	try:
		while 1:
			for dc in range(0, 101, 5):
				p.ChangeDutyCycle(dc)
				time.sleep(0.1)
			for dc in range(100, -1, -5):
				p.ChangeDutyCycle(dc)
				time.sleep(0.1)
	except KeyboardInterrupt:
		pass
	p.stop()
	GPIO.cleanup()
else:
	GPIO.output(17, GPIO.HIGH)
