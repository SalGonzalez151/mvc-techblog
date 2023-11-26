const { Dashboard } = require('../model');

// seeds the dashboard table
const dashboardData = [ {
    title: "Dragonflight is ok",
    description: "it has a lot of content for someone to do.",
    user_id: 1,
    upload_date: "1/1/2011"
}, {
    title: "God of War",
    description: "Amazing storytelling.",
    user_id: 2,
    upload_date: "1/1/2001"
}]

const seedDashboard = () => Dashboard.bulkCreate(dashboardData);

module.exports = seedDashboard