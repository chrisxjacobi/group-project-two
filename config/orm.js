
var connection = require('connection.js');
var util = require('util');

function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push('?');
	}

	return arr.toString();
}
function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		if (ob.hasOwnProperty(key)) {
			arr.push(key + '=' + ob[key]);
		}
	}

	return arr.toString();
}

var orm = {
	all: function (tableInput, cb) {
		var queryString = 'SELECT * FROM ' + tableInput + ';';
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
		// vals is an array of values that we want to save to cols
		// cols are the columns we want to insert the values into
	create: function (table, cols, vals, cb) {
		var queryString = 'INSERT INTO ' + table;

		queryString = queryString + ' (';
		queryString = queryString + cols.toString();
		queryString = queryString + ') ';
		queryString = queryString + 'VALUES (';
		queryString = queryString + printQuestionMarks(vals.length);
		queryString = queryString + ') ';

		console.log(queryString);

		connection.query(queryString, vals, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
		// objColVals would be the columns and values that you want to update
	update: function (table, objColVals, condition, cb) {
		var queryString = 'UPDATE ' + table;

		queryString = queryString + ' SET ';
		queryString = queryString + objToSql(objColVals);
		queryString = queryString + ' WHERE ';
		queryString = queryString + condition;

		console.log(queryString);
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	//proj is a jquery input to the sql that tells us WHICH project to join with the vol input from the Volunteers table
	//the vol input we get should be the volunteer_id of the person who is logged in
	//the proj input is the project_id of the project selected
	//that represents the user who is logged in
	join: function(proj, vol) {
		var queryString = 'SELECT Project.project_id FROM Project CROSS JOIN Volunteer.' + vol + ' WHERE Project.project_id = ' + proj;
		console.log(queryString);
		connection.query(queryString, [proj], [vol], function(err, res){
			if(err) throw err;
			console.log('res obj from join \n\n' + util.inspect(res) + '\n\n end res obj');
		});
	}
};

module.exports = orm;
