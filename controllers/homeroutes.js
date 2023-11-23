const { Dashboard, User, Comments } = require('../model')

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const dashboardData = await Dashboard.findAll({
            include: User,
            attributes: ['created_at']
        })
        const dashboard = dashboardData.map((post) => post.get({ plain: true })
)
        res.render('homepage', {
            dashboard,
            loggedIn: req.session.loggedIn
        } )
} catch (err) {
    console.error(err);
        res.status(500).json(err.message)
        
    }
})


router.get('/login', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard')
    }
    res.render('login')
})



module.exports = router;