const router = require('express').Router();
const { User } = require('../../model');

router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body)

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.loggedIn = true;

            res.status(200).json(userData);
        })
    } catch (err) {
        res.status(500).json(err.message)
    }
})

//log in the user
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: {email: req.body.email}})

        if (!userData) {
            res.status(400).json({ message: 'Incorrect email or password'})
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({message: 'incorrect email or password'})
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id,
            req.session.loggedIn = true;

            res.status(200).json({ user: userData, message: 'You are logged in'})
        })
    } catch (err) {
        console.log(err)
        res.status(400).json(err.message)
    }
})

router.post('/logout', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            req.session.destroy(() => {
                res.status(204).end()
            })
        } else {
            res.status(404).end()
        }
    } catch (err) {
        res.status(500).json(err.message)
    }
     
})

module.exports = router;