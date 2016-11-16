// connect to the mysql DATABASE

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'firsthost1',
    database: 'volunteer_db'
});

connection.connect(function(err){
    if(err) {
        console.log(err);
    }
    console.log("Connected as ID: " + connection.threadId);
});


module.exports = connection;
