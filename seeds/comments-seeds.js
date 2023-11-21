const { Comments } = require('../model')

const commentsData = [ {
    id: 1,
    description: "I love wow!",
    user_id: 1
},{
    id: 2,
    description: "I love god of war!",
    user_id: 2
}]

const seedComments = () => Comments.bulkCreate(commentsData)

module.exports = seedComments