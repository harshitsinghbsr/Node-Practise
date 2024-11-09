// Storing dependencies in variable to use their functionality
const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mySqlPool = require('./config/db');


// configuration dotenv
dotenv.config();

// rest object
const app = express()

// MiddleWare
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.get('/test' , (req,res) => {
  res.status(200).send('<h1>Hello World!! Harshit</h1>')
});

//Port
const PORT = process.env.PORT || 8000;

// Conditinally Listen
mySqlPool.query('SELECT 1').then(()=>{
  console.log("MySQL Connection Working!".bgGreen.white);
  // listen
  app.listen(PORT , ()=>{
    console.log('Server is Running');
    console.log(`Current Port is ${PORT}`);
  }); 
}).catch((error) => console.error(error));

// Chapter-3 Connect With MySql DB => nodejs_db
// Search and install mysql2 => npm i mysql2
// create a config folder and db.js file present in it.
