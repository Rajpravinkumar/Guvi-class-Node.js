// import express 

const { response } = require('express');
const express = require('express');
const { get } = require('mongoose');

//create an express app 

const app = express();

app.get('/', (request, response) => {
  response.json({ message: 'GEt /' })
});

app._router.post('/', (request, response) => {
  response.json({ message: 'POST /' })
});

// listen for end point and start the server 
app.listen(3000, () => {
  console.log(`Server is running @ http://127.0.0.1:3000`)
});

