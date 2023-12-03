import express from 'express';
import 'dotenv/config';
import { run } from './config/db.js';
import { router } from './routes/index.js';
const app = express();
// Start Database
run().catch(console.dir);

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
