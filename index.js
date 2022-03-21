require('dotenv').config();
const app = require('express')();

const { PORT } = process.env;

app.get('/', (_req, res, _next) => {
  try {
    return res.status(200).json({ message: 'ok' })
  } catch (err) {
    console.log(err);
  }
})

app.listen(PORT);
