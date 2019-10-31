module.exports = (app) => {
    const users = require('./controller');
    console.log(users);
    app.get('/api/users', users.getUsers);

};