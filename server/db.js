const mysql = require("mysql")
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "",
  password: "",
  database: ""
})

// pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

module.exports = pool
