'use strict';


var Sequelize = require('sequelize')

var connection = new Sequelize('volunteer_db', 'root', 'firsthost1');

module.exports = function(sequelize, DataTypes) {
  var Project = sequelize.define('Project', {
    project_id: DataTypes.INTEGER,
    project_name: DataTypes.STRING,
    project_date_time: DataTypes.STRING,
    project_location: DataTypes.STRING,
    project_description: DataTypes.STRING,
    project_role: DataTypes.STRING,
    project_duration: DataTypes.DECIMAL

    }, 

  var Volunteer = sequqelize.define('Volunteer', {
    volunteer_id: DataTypes.INTEGER,
    volunteer_name: DataTypes.STRING,
    project_name: DataTypes.STRING,
    project_role: DataTypes.STRING
  })

    {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Volunteer;
};
<<<<<<< HEAD

/*
install seqeulize ()

*/
=======
>>>>>>> b2cec48da5b828946410646765cab757ed62cebf
