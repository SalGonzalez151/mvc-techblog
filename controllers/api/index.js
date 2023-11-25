const router = require('express').Router();
const userRoute = require('./userRoute');
const dashboardRoute = require('./dashboardRoute');
const commentsRoute = require('./commentsRoute');

router.use('/user', userRoute);
router.use('/post', dashboardRoute);
router.use('/comments', commentsRoute);

module.exports = router;