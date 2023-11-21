const seedDashboard = require('./dashboard-seeds')
const seedComments = require('./comments-seeds');
const seedUser = require('./user-seeds')

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUser();
    console.log('\n----- DASHBOARD SEEDED -----\n');
  
    await seedDashboard();
    console.log('\n----- COMMENTS SEEDED -----\n');
  
    await seedComments();
    console.log('\n----- USER SEEDED -----\n');
  
    process.exit(0);
  };
  
  seedAll();