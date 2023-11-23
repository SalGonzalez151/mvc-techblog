const { User } = require('../model')

const userData = [{
    user: 'ranDo',
    email:'rando@gmail.com',
    password:'ran123456'
},{
    user: 'Domingo',
    email:'domingo@gmail.com',
    password:'dom123456'
}]

const seedUser = () => User.bulkCreate(userData, {
    individualHooks: true
});

module.exports = seedUser