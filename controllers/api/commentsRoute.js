const router = require('express').Router();
const { Comments } = require('../../model');
const withAuth = require('../../utils/auth')


router.post('/', async (req, res) => {
    try {
        const commentsData = await Comments.create({
        description: req.body.comments,
        user_id: req.session.user_id,
        dashboard_id: req.body.targetId 
        });
        res.status(200).json(commentsData)
    } catch (err) {
        res.status(500).json(err.message)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const commentsData = await Comments.destroy({ 
            where: {
            id: req.params.id
        }})
    } catch (err) {
        
    }
})

module.exports = router;