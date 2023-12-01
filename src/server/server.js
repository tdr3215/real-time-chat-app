import express from 'express';
import 'dotenv/config';
import { connectdb } from './config/db.js';
import { userRoutes } from './routes/userRoutes.js';

const app = express();
app.use(express.json());
connectdb();

app.get('/api', (req, res) => {
  res.send('API is running!!');
});

// * Middleware
app.use('/api/user', userRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
