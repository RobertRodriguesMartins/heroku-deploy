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

app.get('/cicd', (_req, res, next) => {
  try {
    return res.status(200).json({ message: 'cicd' });
  } catch (err) {
    return res.status(500).end();
  }
});

app.listen(PORT);
