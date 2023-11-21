const router = require('express').Router();
const { Comments } = require('../../models');


router.post('/', async (req, res) => {
    try {
        const commentsData = await Comments.create(req.body);
        res.status(200).json(commentsData)
    } catch (err) {
        res.status(500).json(err.message)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const commentsData = await Comments.update(req.body, {
            where: {
                id: req.params.id,
                user_id: req.session.user_id, 
            }
        })
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