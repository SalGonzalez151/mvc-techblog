const Comments = require('./comments');
const Dashboard = require('./dashboardM')
const User = require('./user');

User.hasMany(Dashboard, {
    foreignKey: 'user_id'
})

Dashboard.belongsTo(User, {
    foreignKey: 'user_id'
})

User.hasMany(Comments, {
    foreignKey: 'user_id'
})

Comments.belongsTo(User, {
    foreignKey: 'user_id'
})

Dashboard.hasMany(Comments, {
    foreignKey: 'dashboard_id'
})

Comments.belongsTo(Dashboard, {
    foreignKey: 'dashboard_id'
})


module.exports = {Comments, Dashboard, User}