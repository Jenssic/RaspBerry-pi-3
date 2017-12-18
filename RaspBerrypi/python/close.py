import RPi.GPIO as GPIO
import threading
import time 
GPIO.setmode(GPIO.BCM)
GPIO.setup(17, GPIO.OUT)
GPIO.setup(25, GPIO.OUT)
GPIO.setup(12, GPIO.OUT)
GPIO.output(17, GPIO.LOW)
GPIO.output(25, GPIO.LOW)
GPIO.output(12, GPIO.LOW)
