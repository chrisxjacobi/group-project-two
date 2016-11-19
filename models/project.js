
var orm = require('../config/orm.js');

var project = {
    showAllProj: function(cb) {
        orm.showAllProj(function(res){
            cb(res);
            console.log("this is the model result " + res);
        });
    },
    addProj: function(columns, values, cb) {
        orm.addProj('Project', columns, values, function(res){
            cb(res);
        });
    },
    joinProj: function(cb) {
        orm.joinProj(proj, vol, function (res) {
            cb(res);
        });
    }
};

module.exports = project;
