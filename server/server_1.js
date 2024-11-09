// Use npm init , npm i install express
// use "cls" to clear terminal
// This is main File of Node JS. In This We First Create Server.
// Can't Use Dependencies directly first store in variable and then use function of that dependancies.
// To use ES6 then use type module. 
const express = require('express')
// import express from 'express';

// Now can use features of express.
// Create App object also called REST Object
// In express we add functionily in express()
const app = express()

// MiddleWare


// Routes
// First test get method and after test we write callback function in this we can receive request and response.
// So, as argument we receive request and response
// Now can send response (res here).
// here we in status send 200 for OK request and can use send function or json response bhi send kar sakte h 
// Now need to listen basic server its mean we need to run server
app.get('/test' , (req,res) => {
  res.status(200).send('<h1>Hello World</h1>')
});

// To run application we need port
const PORT = 8080;

// Now need to listen basic server its mean we need to run server
// In listen we need to provide port and we provided it in variable and its also give callback function
// listen
app.listen(PORT , ()=>{
  console.log('Server is Running');
});

// Now to test this server write 'node server.js'
// By Default its work on localhost , can host on server then type that server. then port and then api address
// Syntax => http://localhost:PORT/API Address
// http://localhost:8080/test
// Now When i change Text it will not change with it 