import express from 'express';
import 'dotenv/config';
import { connectdb } from './config/db.js';
import { router } from './routes/index.js';
const app = express();
connectdb();
// * JSONify the responses recieved
app.use(express.json());
app.use('/api', router);

app.get('/api', (req, res) => {
  res.send('Api is running!');
});
// * Middleware

// Serving static assets
app.use(express.static('public'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
