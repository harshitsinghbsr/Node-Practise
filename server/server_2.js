const express = require('express');
// To Change Colors of Console string in terminal install "Colors" check on npmjs.com for more
// npm i install colors
const colors = require('colors');
// "Morgan" Package is used to view details which API hits 
const morgan = require('morgan');
// We can secure our sensitive data with help of "dotenv" like PORT number
// After installation create a .env file 
// Note -> When ever changes occur in .env file restart server each time.
const dotenv = require('dotenv');


// configuration dotenv
// dotenv.config({path:'if env file is other than root so define its path'});
dotenv.config();

// rest object
const app = express()

// MiddleWare
  // Morgan is middleware by use() method we use middleware
  // When refresh on browser its show in terminal like GET /test 200 2.641 ms - 30
  // app.use(morgan('dev'));
  // Can use in development mode for debugging. 
app.use(morgan('dev'));

// There is default middleware when we receive data from frontside or client side json data.
// If you don't write that than can't able to receive data in body.
app.use(express.json());

// Routes
app.get('/test' , (req,res) => {
  res.status(200).send('<h1>Hello World!! Harshit</h1>')
});

// To run application we need port
// const PORT = 8080;
// By not directly exposing PORT use process variable and then follow by env and than name of variable in .env file.
const PORT = process.env.PORT || 8000; //8000 if port not found.

// listen
app.listen(PORT , ()=>{
  // console.log('Rainbow'.rainbow);
  console.log('Server is Running'.italic);
  console.log(`Current Port is ${PORT}`);
}); 

// Chapter 2
// To Avoid restart server each time we have package known as nodemon
// So when we save changes auto detect and save changes.
// Install globolly or not your choice
// Visit npmjs.com
// Search - nodemon and install => npm i install nodemon
// In package.json add in script to run node by nodemon
// "server":"nodemon server.js"
// now in terminal write "npm run server" we use run because we run a script knows as server.
// Now save every changes and refresh browser.
