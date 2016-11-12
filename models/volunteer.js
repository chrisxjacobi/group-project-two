'use strict';


module.exports = function(sequelize, DataTypes) {
  var Volunteer = sequelize.define('Volunteer', {
    volunteer_name: DataTypes.STRING,
    volunteer_project: DataTypes.STRING,
    volunteer_type: DataTypes.STRING,
    volunteer_contribution: DataTypes.INTEGER,
    }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Volunteer;
};