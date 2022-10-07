import threading
from time import sleep

def fun1():
    
    for i in range(0,10):
            
            print("\nHi, I am thread 1")
            sleep(1)
        
    
def fun2():
    
    for i in range(0,10):
            
        print("\nHello, I am thread 2")
        sleep(1)
    
  
t1=threading.Thread(target=fun1)
t2=threading.Thread(target=fun2)
    
t1.start()
t2.start()

