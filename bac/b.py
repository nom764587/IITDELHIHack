import crypt
import json



# 
# Data logic :
#  dict containng data with key as hash and data will conaint a key with crypto which is crypto graph of prev
# and Crypto graph of frist one is None.....
# 
# 
# 
# 
# 
# 
# 
# 
# 

data={}
def hash(*args,**kwargs):
    return crypt.crypt(*args,**kwargs,salt=crypt.METHOD_SHA512)

def addData(obj,prev):

    obj["prev"]=hash(json.dumps(prev))
    if(prev==None):
        obj["prev"]=None
    data[hash(json.dumps(obj))]=obj
    return obj
def save():
    json.dump(data,open("data.json","w"))

# class DataLog:
#     data={}
#     previous=None
#     next=None
#     cryptographhy=""

#     def _init__(self):
#         pass
#     def genHash(self):
#        self.cryptographhy= hash(json.dumps(self.data))
prev=None
for   i in range(100):
    obj={
        "k":i
    }
    
    prev=addData(obj,prev)
# print(data)
save()