require('dotenv').config();
const app = require('express')();

const PORT = process.env.PORT;

app.get('/', (req, res, next) => {
  try {
    return res.status(200).json({ message: 'ok' })
  } catch (err) {
    console.log(err);
  }
})

app.listen(PORT, () => console.log(`running on ${PORT}`));