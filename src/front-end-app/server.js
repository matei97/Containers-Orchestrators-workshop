const express = require('express');
const axios = require('axios');
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';


const backEndApi = axios.create({
  baseURL: 'http://localhost:5000',
  // baseURL: 'http://back:5000',
  timeout: 2000
})

const app = express();
app.get('/', async (req, res) => {
  try {
    req.backEndApi = await backEndApi.get()
    return res.status(200).json("Front End application -> " + req.backEndApi.data)
  } catch (e) {
    res.status(500).json("Backend is down")
  }
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);