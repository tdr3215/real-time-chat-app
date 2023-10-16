import axios from 'axios';
import { useEffect, useState } from 'react';
// import React from 'react';
export const ChatPage = () => {
  const [chats, setChats] = useState([]);
  useEffect(() => {
    const fetchChats = async () => {
      const { data } = await axios.get('/api/chat');
      setChats(data);
    };
    fetchChats();
  }, []);

  return (
    <>
      <ul>
        {chats.map((chat, i) => {
          return <li key={i}>{chat.chatName}</li>;
        })}
      </ul>
    </>
  );
};
