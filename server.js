import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/index.js';
import db from './db/connection.js';

// import Test from './controllers/auth';
// import crypto from 'crypto';

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`express Server listening on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send({ test: 'yo', name: 'hello' });
});

db.on('connected', () => {
  console.log('Connected to MongoDB!');
});
