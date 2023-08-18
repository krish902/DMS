const express = require('express')
const router = express.Router()

router.post('/register', async(req,res,next) => {
    res.send("register router")
})

router.post('/login', async(req,res,next) => {
    res.send("Login router")
})

router.post('/refresh-token', async(req,res,next) => {
    res.send("register token router")
})

router.delete('/logout', async(req,res,next) => {
    res.send("Logout router")
})

module.exports = router
