const { Comments } = require('../model/comments')

const commentsData = [ {
    description: "I love wow!",
    upload_date:"",
    user_id: 1,
    dashboard_id: 1
},{
    description: "I love god of war!",
    upload_date:"",
    user_id: 2,
    dashboard_id: 2
}]

const seedComments = () => Comments.bulkCreate(commentsData)

model.exports = seedComments