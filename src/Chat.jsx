import React, { useEffect, useState } from 'react';
import './ChatBox.css';
import axios from 'axios';

// import gtts from 'gtts';

const ChatBox = () => {
  const [messages, setMessages] = useState([
{    "text":"Hello! Welcome to South Indian Bank. How can I assist you today?",sender:"receiver"
}  ]);
const [audioURL, setAudioURL] = useState('');
  const [input, setInput] = useState('');
    const [disabled,setDisabled]=useState(false)
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const [audio, setAudio] = useState('');
  const handleSendMessage = () => {
    let m=[...messages,{ text: input, sender: 'user' }]
    setMessages([...messages, { text: input, sender: 'user' }])
    setInput('');
    setDisabled(true)
    fetch("http://127.0.0.1:5000/?text="+JSON.stringify(m),).then((e)=>{
        e.text().then(e=>{
            setMessages([...m,{text:e,sender:"receiver"}])
            speak(e,{pitch:250,speed:50,amplitude:68});
            // generateSpeech(e)
            // const tts = new gtts('en', e);
            // tts.save('audio.wav', function() {
            // setAudio('audio.wav');
    // });
        })
    }).then(()=>{
        setDisabled(false)
    })
    
    
  };
  const generateSpeech = async (text) => {
    try {
        const response = await axios.post('http://localhost:5000/text-to-speech', { text });
        setAudioURL(URL.createObjectURL(response.data));
    } catch (error) {
        console.error('Error generating audio:', error);
    }
};
//   useEffect(()=>{
//     fetch("http://127.0.0.1:5000/?text="+JSON.stringify([{ text: "...", sender: 'user' }]),).then((e)=>{
//         e.text().then(e=>{
//             setMessages([{text:e,sender:"receiver"}])
//             // const tts = new gtts('en', e);
//             // tts.save('audio.wav', function() {
//             // setAudio('audio.wav');
//     // });
//         })
//     }).then(()=>{
//         setDisabled(false)
//     })
//   })
  return (
    <div className="chat-box">
        <h2>Chat With Ai</h2>
      <div className="message-container">
        {messages.map((message, index) => (
          <Message key={index} text={message.text} sender={message.sender} />
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          disabled={disabled}
          onChange={handleInputChange}
          placeholder="Type a message..."
          onKeyDown={(e)=>{
            if (e.key === 'Enter' || e.keyCode === 13) {
                handleSendMessage()
            }
          }}
        />
        <button onClick={handleSendMessage}>Send</button>
        {audioURL && <audio src={audioURL} controls hidden />}
      </div>
    </div>
  );
};

export default ChatBox;


const Message = ({ text, sender }) => {
    return (
      <div className={`message ${sender}`}>
        <p>{text}</p>
      </div>
    );
  };