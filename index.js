require('dotenv').config();
const app = require('express')();

const { PORT } = process.env;

app.get('/', (_req, res) => {
  try {
    return res.status(200).json({ message: 'ok' });
  } catch (err) {
    return res.status(500).end();
  }
});

app.listen(PORT);
