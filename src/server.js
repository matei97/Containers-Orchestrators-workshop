const express = require('express');
const bodyParser = require('body-parser')

const axios = require('axios');
const app = express();
const db = require('./queries')

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.post('/users', db.createUser)
app.get('/users', db.getUsers)

app.get('/', async (req, res) => {
 res.status(200).json("Healthy");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);