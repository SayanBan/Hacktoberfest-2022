
import threading
from time import sleep



def send_msg():
    
    while True:
        
    
        message=input("Client: ")
        
        
        
        print("Client: ",message)
        sleep(2)
        
        
            
    
    
def receive_ms():
    
    while True:
    
        print("Server: ")
        print(" ")
        sleep(2)
    

    
ts=threading.Thread(target=receive_ms)
    


ts.start()
send_msg()