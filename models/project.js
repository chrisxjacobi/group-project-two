
var orm = require('../config/orm.js');

var project = {
    showAll: function() {
        console.log('requested from ORM');
        console.log(orm.showAllProj());
        return orm.showAllProj();
    },
    add: function(project_name, project_date_time, project_location, project_description, project_duration, cb) {
        orm.addProj(project_name, project_date_time, project_location, project_description, project_duration, function(res){
            cb(res);
        });
    },
    join: function(cb) {
        orm.joinProj(proj, vol, function (res) {
            cb(res);
        });
    }
};

module.exports = project;
