// import { Button, Card, CardBody, CardHeader, Text } from '@chakra-ui/react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ChatPage } from './pages/ChatPage';
import { Homepage } from './pages/Homepage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/chats" element={<ChatPage />} />
      </Routes>
    </div>
  );
}

export default App;
