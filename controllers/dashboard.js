const { Dashboard, User, Comments } = require('../model')

const router = require('express').Router();




router.post('/', async (req, res) => {
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
      res.status(200).json(dashboardData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.get('/', async (req, res) => {
    try {
        const dashboardData = await Dashboard.findAll({
            // include: User,
            // attributes: ['user']
        })
        const dashboard = dashboardData.map((post) => post.get({ plain: true })
)
        res.render('dashboard', {
            dashboard,

        } )
} catch (err) {
    console.error(err);
        res.status(500).json(err.message)
        
    }
})

  router.get('/:id', async (req, res) => {
    try {
        const dashboardData = await Dashboard.findByPk(req.params.id, {
            include: { model: Comments,
            attributes: ['description'] }
        })
        const dashboard = dashboardData.get({ plain: true })
        res.render("singleDashboard", {
            ...dashboard,
            logged_in: req.session.logged_in
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
        res.status(404).json({ message: 'No project found with this id!' });
        return;
      }
  
      res.status(200).json(dashboardData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;