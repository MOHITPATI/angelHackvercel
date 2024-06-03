// Chat.js
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Header from '../Header/Header';
const socket = io('http://localhost:3000');


const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket.on('chat message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });
  }, []);

  const sendMessage = () => {
    socket.emit('chat message', message);
    setMessage('');
  };

  return (
    <div>
      <Header/>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <h1 style={{color:"black"}}>Under Development .....</h1>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
