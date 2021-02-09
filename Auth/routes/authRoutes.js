const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const { jwtkey } = require('../keys')
const router = express.Router();
const Users = mongoose.model('Users');


router.post('/signup', async (req, res) => {

    const { email, name, age, password } = req.body;

    try {
        const user = new Users({ email, name, age, password });
        await user.save();
        const token = jwt.sign({ userId: user._id }, jwtkey)
        res.send({ token })
    } catch (err) {
        return res.status(422).send(err.message)
    }


})

router.post('/signin', async (req, res) => {

    const { email, password } = req.body
    if (!email || !password) {
        return res.status(422).send({ error: "must provide email or password" })
    }
    const user = await Users.findOne({ email })
    if (!user) {
        return res.status(422).send({ error: "must provide email or password" })
    }
    try {
        await user.comparePassword(password);
        const token = jwt.sign({ userId: user._id }, jwtkey)
        res.send({ token })
    } catch (err) {
        return res.status(422).send({ error: "must provide email or password" })
    }

})


module.exports = router