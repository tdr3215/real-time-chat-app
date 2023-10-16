import express from 'express';
import { chats } from './data/data.js';
import 'dotenv/config';

const app = express();

app.get('/', (req, res) => {
  res.send('API is running!!');
});

// API endpoints
app.get('/api/chat', (req, res) => {
  res.send(chats);
});

// GET /api/:id
app.get('/api/chat/:id', (req, res) => {
  const oneChat = chats.find(({ _id }) => _id === req.params.id);
  res.send(oneChat);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});