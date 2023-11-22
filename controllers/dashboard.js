const { Dashboard, User, Comments } = require('../model')

const router = require('express').Router();




router.post('/', async (req, res) => {
    try {
      const dashboardData = await Dashboard.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newProject);
    } catch (err) {
      res.status(400).json(err);
    }
  });