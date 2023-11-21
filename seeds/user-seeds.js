const { User } = require('../model')

const userData = [{
    id: 1,
    user_name: 'ranDo',
    email:'rando@gmail.com',
    password:'ran123456'
},{
    id: 2,
    user_name: 'Domingo',
    email:'domingo@gmail.com',
    password:'dom123456'
}]

const seedUser = () => User.bulkCreate(userData);

model.exports = seedUser