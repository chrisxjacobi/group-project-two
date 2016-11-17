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
        password: "reyes",
        database: "volunteer_db"
    },
    jawsDB: {
        port: 3306,
        host: 'enqhzd10cxh7hv2e.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'vrdsx4gjrwv9518t',
        password: 'tyk3nhgceash7x8n',
        database: 'mtj5ryjsc0jyf8ha'
    }
};

// jawsdb-octagonal-72227
// mysql://vrdsx4gjrwv9518t:tyk3nhgceash7x8n@enqhzd10cxh7hv2e.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/mtj5ryjsc0jyf8ha

// connect your jawsDB connection with the mysql connection.
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(source.jawsDB);
}
else {
    connection = mysql.createConnection(source.localhost);
}


// Replace the connection code here with one to connect to your JawsDB connection.
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
