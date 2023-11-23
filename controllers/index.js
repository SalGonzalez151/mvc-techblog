const router = require('express').Router();
const apiRoutes = require('./api');
const htmlRoutes = require('./homeroutes')
const dashboardRoutes = require('./dashboard')


router.use('/', htmlRoutes);
router.use('/api', apiRoutes);

router.use('/dashboard', dashboardRoutes);

module.exports = router;