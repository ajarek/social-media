const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

router.post('/register', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(req.body.password, salt)
        const newUser = new User({
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            password: hashedPass,
            birth: req.body.birth,
            sex: req.body.sex
        })
        const user = await newUser.save()
        console.log('Registered ok' + user)
        res.status(201).json('register in:' + newUser.name + '😎')
    } catch (err) {
        res.status(500).send(err)
    }
})
module.exports = router