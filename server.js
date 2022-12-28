import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/index.js';
import cors from 'cors';
import db from './db/connection.js';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', routes);
app.get('/', (req, res) => {
  res.send('Server Up And Running');
});

db.on('connected', () => {
  console.log('Connected to MongoDB!');
});

app.listen(PORT, () =>
  process.env.NODE_ENV === 'production'
    ? console.log(`Express server running in production on port ${PORT}\n\n`)
    : console.log(
        `Express server running in development on: http://localhost:${PORT}`
      )
);
