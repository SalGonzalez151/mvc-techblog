const { Comments } = require('../model')

// seeds the comments table
const commentsData = [ {
    id: 1,
    description: "I love wow!",
    user_id: 1,
    dashboard_id: 1
},{
    id: 2,
    description: "I love god of war!",
    user_id: 2,
    dashboard_id: 2
}, {
    id:3,
    description: "wow pvp sucks",
    user_id:1,
    dashboard_id:1
}]

const seedComments = () => Comments.bulkCreate(commentsData)

module.exports = seedComments