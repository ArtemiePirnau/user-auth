import React, { useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';

type Message = {
   user: string;
   text: string;
};

const ChatSocket = () => {
   const [socket, setSocket] = useState<Socket | null>(null);
   const [messages, setMessages] = useState<Message[]>([]);
   const [messageInput, setMessageInput] = useState('');

   useEffect(() => {
      const newSocket = io('http://localhost:5000');
      setSocket(newSocket);

      newSocket.on('chat message', (msg: Message) => {
         setMessages((prev) => [...prev, msg]);
      });

      return () => {
         newSocket.disconnect();
      };
   }, []);

   const sendMessage = (e: React.FormEvent) => {
      e.preventDefault();
      if (messageInput.trim() && socket) {
         const msg: Message = { user: 'You', text: messageInput.trim() };
         socket.emit('chat message', msg);
         setMessageInput('');
      }
   };
   return (
      <div>
         <div className="chat-messages">
            {messages.map((msg, index) => (
               <div key={index}>
                  <strong>{msg.user}</strong>: {msg.text}
               </div>
            ))}
         </div>
         <form onSubmit={sendMessage}>
            <input
               type="text"
               value={messageInput}
               onChange={(e) => setMessageInput(e.target.value)}
            />
            <button type="submit" disabled={!socket}>
               Send
            </button>
         </form>
      </div>
   );
};
export default ChatSocket;
