
const usersRoute = require('./mock/user.json');
const userRoute = require('./mock/usersList.json');

module.exports = () => ({
    users: usersRoute,
    user: userRoute,
});