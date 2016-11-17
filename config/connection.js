// connect to the mysql DATABASE

var mysql = require('mysql');
//
// var connection = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: 'firsthost1',
//     database: 'volunteer_db'
// });
//
// connection.connect(function(err){
//     if(err) {
//         console.log(err);
//     }
//     console.log("Connected as ID: " + connection.threadId);
// });
//
//
// module.exports = connection;

var source = {

    localhost: {
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: "firsthost1",
        database: "volunteer_db"
    },
    jawsDB: {
        port: 3306,
        host: 'l3855uft9zao23e2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'm3jhaiifn50cvyni',
        password: "x9y8zgizwm2uhmu9",
        database: "qe10flu5xgw5h5sr"
    }
};

// jawsdb-octagonal-72227

// connect your jawsDB connection with the mysql connection.
var connection = mysql.createConnection(source.jawsDB);



// Replace the connection code here with one to connect to your JawsDB connection.
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
