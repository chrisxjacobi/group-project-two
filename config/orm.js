
var connection = require('../config/connection.js');
var util = require('util');

// function to make question marks
function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push('?');
	}

	return arr.toString();
}


var orm = {
	showAllProj: function(cb) {
		var queryString = 'SELECT * FROM Project;';
		connection.query(queryString, function(err, res) {
			if (err) throw err;
			console.log('Made database call');
			/*console.log('result obj from showAllProj \n\n' + util.inspect(result) + '\n\n end result obj from showAllProj');*/
			cb(res);
		});

	},
	addProj: function (table, cols, vals, cb) {
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
	//proj is a jquery input to the sql that tells us WHICH project to join with the vol input from the Volunteers table
	//the vol input we get should be the volunteer_id of the person who is logged in
	//the proj input is the project_id of the project selected
	//that represents the user who is logged in
	joinProj: function(proj, vol, cb) {
		//var queryString = 'SELECT Project.project_id FROM Project CROSS JOIN Volunteer.' + vol + ' WHERE Project.project_id = ' + proj;
		var queryString = ('INSERT INTO Linked (vol_id, proj_id) VALUES (' + vol  + ', ' + proj + ');');
		console.log(queryString);
		connection.query(queryString, [proj], [vol], function(err, res){
			if(err) throw err;
			console.log('res obj from joinProj \n\n' + util.inspect(res) + '\n\n end res obj from joinProj');
		});
	}
};

module.exports = orm;
