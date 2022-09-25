import express from 'express';

const PORT = 3000;
const app = express();

app.listen(PORT, () => {
  console.log(`express Server listening on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('hello');
});
