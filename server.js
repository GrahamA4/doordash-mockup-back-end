import express from 'express';
import dotenv from 'dotenv';
import Test from './controllers/auth.js';
import crypto from 'crypto';

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

app.listen(PORT, () => {
  console.log(`express Server listening on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send({ test: 'yo', name: 'hello' });
});
