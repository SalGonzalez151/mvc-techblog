const { Dashboard, User, Comments } = require('../model')

const router = require('express').Router();
const withAuth = require('../utils/auth')




router.post('/', withAuth, async (req, res) => {
    try {
      const dashboardData = await Dashboard.create({
        ...req.body,
        user_id: req.session.user_id,
        include: User,
        attributes: ['user']
      });
      const dashboard = dashboardData.get({ plain: true})
      res.render('dashboard', {
        include: { model: Comments, 
        attributes: ['description']}
      })
      res.status(200).json(dashboard);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.get('/',  withAuth, async (req, res) => {
    try {
        const dashboardData = await Dashboard.findAll({
            where: {
                user_id: req.session.user_id
            }
        })
        const dashboard = dashboardData.map(p => p.get({ plain: true }))
        res.render('dashboard', {
            dashboard, 
            loggedIn: req.session.loggedIn
        })
        // res.status(200).json(dashboard)
    } catch (err) {
        console.log(err.message)
        res.status(500).json(err.message)
    }
})

  router.get('/:id', async (req, res) => {
    try {
        //get post with comments
        const postData = await Dashboard.findByPk(req.params.id, {
          include: [ {
            model: Comments,
            include: User,
          },{
            model: User
          }]
        })
       const post = postData.get({ plain: true })
       res.render('singleDashboard', {
        ...post,
        loggedIn: true
       })
    } catch (err) {
        console.log(err.message)
        res.status(500).json(err.message)
    }
})

  router.delete('/:id', async (req, res) => {
    try {
      const dashboardData = await Dashboard.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!dashboardData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
  
      res.status(200).json(dashboardData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;