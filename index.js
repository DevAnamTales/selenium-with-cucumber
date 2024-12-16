import express from 'express';
const port = 3000;
const app = express();
app.use(express.static('espresso-addict-game/frontend'));
app.listen(port, () =>
  console.log('Listening on http://localhost:' + 3000));