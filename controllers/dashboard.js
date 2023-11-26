const { Dashboard, User, Comments } = require('../model')

const router = require('express').Router();
const withAuth = require('../utils/auth')

// renders the dashboard posts 
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
        
    } catch (err) {
        console.log(err.message)
        res.status(500).json(err.message)
    }
})

// renders the post per id
  router.get('/:id', async (req, res) => {
    try {
        
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
        res.status(500).json(err.message)
    }
})

// deletes the post per id
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


  