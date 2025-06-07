import React, { useState } from 'react';
import axios from 'axios';

const TextToSpeech = () => {
    const [text, setText] = useState('');
    const [audioURL, setAudioURL] = useState('');

    const generateSpeech = async () => {
        try {
            const response = await axios.post('http://localhost:5000/text-to-speech', { text });
            setAudioURL(URL.createObjectURL(response.data));
        } catch (error) {
            console.error('Error generating audio:', error);
        }
    };

    return (
        <div>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text for speech"
            />
            <button onClick={generateSpeech}>Generate Speech</button>
            {audioURL && <audio src={audioURL} controls />}
        </div>
    );
};

export default TextToSpeech;
