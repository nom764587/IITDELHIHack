from flask import Flask, request, send_file
import json
from flask_cors import CORS, cross_origin
import crypt
import json
app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# from gtts import gTTS
import os
import openai

# Set up your OpenAI API key
api_key = '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'
openai.api_key = api_key
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
# Define a prompt for the model
def C(e):
    return {"role":"user" if e["sender"]=="user" else "assistant","content":e["text"]}
@app.route('/', methods=['GET'])
@cross_origin()
def get_text():
    global data;
    text = request.args.get('text')
    data=json.loads(text)

    l=[{"role":"system","content":"""
You are ai(Bank Staff of SIB (South Indian Bank) )
        You have to assist our client (SIB CLIENT) for any banking detail and all other things related to bank 
        you are a bank Staff
        yor response is directly served to client 
        You are our main staff
        you have to clear all our client doubts
        and you are the only ai staff 
        plz don't divert in other topic 
        and aslo greet our client with frist message
"""}]
    l.extend(list(map(C,data if data else [])))
    print(l,data)
    data={}
    prev=None
    for i in l:
        obj={"d":i}
    
        prev=addData(obj,prev)
    # Request gpt-3.5-turbo for chat completion
    response = openai.ChatCompletion.create(
      model="gpt-3.5-turbo",
      messages=l
    )
    obj={"d":response["choices"][0]["message"]["content"]}
    addData(obj,prev)
    save()
    print(response)

    return response["choices"][0]["message"]["content"]



@cross_origin()
@app.route('/new', methods=['GET'])
def SaveMeetInfo():
    myData=json.load(open("meet.json"))
    myData.append(request.args.get("meet"))
    print(myData)
    json.dump(myData,open("meet.json","w"))
    return "1"
if __name__ == '__main__':
    app.run(debug=True)
