const { Dashboard } = require('../model/dashboard');

const dashboardData = [ {
    title: "Dragonflight is ok",
    description: "it has a lot of content for someone to do.",
    upload_date:"",
    user_id: 1
}, {
    title: "God of War",
    description: "Amazing storytelling.",
    upload_date:"December, 1 2023",
    user_id: 2
}]

const seedDashboard = () => Dashboard.bulkCreate(dashboardData);

module.exports = seedDashboard