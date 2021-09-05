const express = require('express');
const app = express();
const morgan = require('morgan');
const connectDB = require('./config/db');
const ApiReq = require('./requests/http_req');


// connectDB();

app.use(morgan('tiny'));


app.get('/', async (req, res) => {

    const data = await ApiReq('https://dweet.io:443/get/latest/dweet/for/thecore');

    console.log(typeof data, 'HELLO');
    res.json(JSON.stringify(data));
  })
  


  const port = 3000;
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })        

