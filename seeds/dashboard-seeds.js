const { Dashboard } = require('../model');

const dashboardData = [ {
    title: "Dragonflight is ok",
    description: "it has a lot of content for someone to do.",
    user_id: 1
}, {
    title: "God of War",
    description: "Amazing storytelling.",
    user_id: 2
}]

const seedDashboard = () => Dashboard.bulkCreate(dashboardData);

module.exports = seedDashboard