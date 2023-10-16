// import { Button, Card, CardBody, CardHeader, Text } from '@chakra-ui/react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ChatPage } from './pages/Chat/ChatPage';
import { Homepage } from './pages/Home/Homepage';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/chats" element={<ChatPage />} />
      </Routes>
    </>
  );
}

export default App;
