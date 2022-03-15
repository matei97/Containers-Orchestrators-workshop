const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const TIME_ALIVE = process.env.TIME_ALIVE

let current_Date = new Date();

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Cloud Computing');
});

app.get('/health', (req, res) => {

  result = (new Date() - current_Date) / 1000;
  console.log('Seconds passed ' + result)

  if (result > TIME_ALIVE) {
    res.status(500).send('Service Down');
  } else {
    res.status(200).send('OK');
  }
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);