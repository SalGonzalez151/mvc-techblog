const { Dashboard, User, Comments } = require('../model')

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const dashboardData = await Dashboard.findAll({
            include: User,
        })
        const dashboard = dashboardData.map((post) => post.get({ plain: true })

        )
        res.render('homepage', {
            dashboard,
            loggedIn: req.session.loggedIn
        })
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


router.get('/post/:id', async (req, res) => {
    try {
        const userPostData = await Dashboard.findByPk(req.params.id, {
            include: [
                {
                    model: Comments,
                    include: User,
                },
                {
                    model: User
                }
            ]
        })

        const userPost = userPostData.get({ plain: true })


        // render users post and edit view
        res.render('editPost', {
            ...userPost,

            loggedIn: req.session.loggedIn
        })

    } catch (err) {
      console.log(err);
      res.status(500).json(err.message)
    }
  })
  


module.exports = router;