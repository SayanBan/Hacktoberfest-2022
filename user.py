# -*- coding: utf-8 -*-
"""
Created on Thu May 13 11:24:05 2021

@author: Avik
"""

import socket
import threading
from time import sleep

s=socket.socket(socket.AF_INET,socket.SOCK_STREAM)
host=input("Enter the host name")
port=6001
s.connect((host,port))
print("Connected to chat server ")

def send_msg():
    
    while True:
        
    
        message=input("Client: ")
        
        if message=="quit":
            exit()
        message=message.encode()
        s.send(message)
        sleep(2)
        
        
            
    
    
def receive_msg():
    
    while True:
    
        incoming_message =s.recv(1024)
        incoming_message=incoming_message.decode()
        print("Server: ", incoming_message)
        print(" ")
        
        if incoming_message=="quit":
            exit()
            
        sleep(2)
    

    

tr=threading.Thread(target=receive_msg,name=4)
    


tr.start()
send_msg()

