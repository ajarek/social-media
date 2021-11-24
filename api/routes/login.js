const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const open = require('open');

router.post('/login', async (req, res) => {

    const user = await User.findOne({
        email: req.body.email
    })
    if (!user) return res.status(400).json({
        mesage: "Invalid email or password ! 😕",
        status: 400
    })
    try {

        const isMatch = await bcrypt.compare(req.body.password, user.password)
        if (isMatch) {
            res.status(201).json({
                mesage: user.name
            })
            open('index.html')
        } else {
            return res.status(422).json({
                mesage: 'Invalid password ! 😕',
                status: 422
            })
        }
    } catch (err) {
        return res.status(400).json({
            mesage: 'Invalid password ! 😕',
            status: 400
        })
    }
})
module.exports = router