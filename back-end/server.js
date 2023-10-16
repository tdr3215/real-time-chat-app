// const express = require('express');
import express from 'express';
// const { chats } = require('./data/data');
import { chats } from './data/data.js';
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

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
