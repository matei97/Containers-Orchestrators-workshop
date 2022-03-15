const express = require('express');
const axios = require('axios');
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';


const backEndApi = axios.create({
//   baseURL: 'http://localhost:5000',
  baseURL: 'http://back-end:5000',
  timeout: 2000,
  headers :{'Authorization': GetAuthorization()}
})

const app = express();
app.get('/', async (req, res) => {
  try {
    req.backEndApi = await backEndApi.get()
    return res.status(200).json("Front End application -> " + req.backEndApi.data)
  } catch (e) {
    res.status(500).json(e.message)
  }
});

function GetAuthorization(){
    user = process.env.USERNAME
    pass = process.env.PASSWORD
  
    buff = Buffer.from(`${user}:${pass}`)

    return 'Basic '+ buff.toString('base64');
}

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);