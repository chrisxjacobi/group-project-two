// 'use strict';
//
//
// module.exports = function(sequelize, DataTypes) {
//   var Volunteer = sequelize.define('Volunteer', {
//     volunteer_name: DataTypes.STRING,
//     volunteer_project: DataTypes.STRING,
//     volunteer_type: DataTypes.STRING,
//     volunteer_contribution: DataTypes.INTEGER,
//     }, {
//     classMethods: {
//       associate: function(models) {
//         // associations can be defined here
//       }
//     }
//   });
//   return Volunteer;
// };



var orm = require('../config/orm.js');


var volunteer = {
    joinProj: function (cb) {
        orm.joinProj(proj, vol, function (res) {
            cb(res);
        });
    }
};
<<<<<<< HEAD

module.exports = volunteer;
