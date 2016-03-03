var usersRoute;
usersRoute = require('../api/users/router.js');

module.exports = function(app){
    return usersRoute(app);
};