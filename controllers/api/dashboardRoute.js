const router = require('express').Router();
const { Dashboard } = require('../../model');

router.post('/', async (req, res) => {
    try {
        const dashboardData = await Dashboard.create({
            ...req.body,
            user_id: req.session.user_id,    
        })
        res.status(200).json(dashboardData) 
    } catch (err) {
        res.status(500).json(err.message)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const dashboardData = await Dashboard.update({
            ...req.body,
            // date_updated: new Date()
        }, {
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            }
        })
        if (!dashboardData) {
            res.status(404).json("Post not found")
        }
        res.status(200).json(dashboardData)
    } catch (err) {
        res.status(500).json(err.message)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const dashboardData = await Dashboard.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,    
            }
        })
        res.status(200).json(dashboardData)
    } catch (err) {
        res.status(500).json(err.message);
    }
})

module.exports = router;