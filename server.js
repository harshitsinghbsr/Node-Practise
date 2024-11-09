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
app.use('/api/studentController/StudentRecords' , require('./routes/studentRoutes'));

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

// Chapter 4 => Create REST API to get all records
// Step 1 . Create A controller and Routes Folder and file name is studentRoutes.js and studentController.js
// Step 2 . Import express dependencies in routes. and create routes object and routes with get method and export that.
// Step 3 . Create a Method for students Records in and export that method.
// Step 4. Now Import this method in routes file to show at this url open this 
// Now we also need to follow naming convection
// Step 5. add route in server.js => app.use('/api/vi/studentRecord' , require('./routes/studentRoutes'));
// Now the url for this controller is http://localhost:8080/api/vi/studentController/getAllStudentRecord
// Step 6. Now need to work in Controller by makeing method async and try and catch
// In callback its two argument req,res take request from user and give response to user.


// Chapter - 5 : Get Student By ID

