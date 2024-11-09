// Storing dependencies in variable to use their functionality
// We use .then and .catch so need use promise too.
const mysql = require('mysql2/promise');

// Create Pool or connection to database
const mySqlPool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password:'',
  database: 'nodejs_db',
});

// Now on behalf of this we can connect with this db
// In our server we listen directly but now on behalf of mySql we listen
module.exports = mySqlPool;