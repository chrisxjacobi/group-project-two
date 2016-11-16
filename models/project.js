
var orm = require('../config/orm.js');

var project = {
    showAllProj: function() {
        orm.showAllProj(function(res){
            cb(res);
        });
    },
    addProj: function(project_name, project_date_time, project_location, project_description, project_duration, cb) {
        orm.addProj(project_name, project_date_time, project_location, project_description, project_duration, function(res){
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
