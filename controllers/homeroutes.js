const { Dashboard, User, Comments } = require('../model')

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const dashboardData = await Dashboard.findAll({
            inlude: User,
            attributes: ['created_at', 'description']
        })
        const dashboard = dashboardData.map((post) =>
      post.get({ plain: true })
)
        res.render('homepage', {
            dashboard,
            loggedIn: req.session.loggedIn
        } )
} catch (err) {
        res.status(500).json(err.message)
    }
})

module.exports = router;