//Connecting database to server

const Pool = require("pg").Pool;


const pool = new Pool({
    user:"postgres",
    password:"supeRR",
    host:"localhost",
    port:5632,
    database:"perntodo"
});

module.exports = pool;