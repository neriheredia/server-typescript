import {Router,Request,Response} from 'express'

const User = require('../models/User') 

const router = Router()

//Register
router.post('/register', async (req:Request,res:Response) => {
    
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    try {
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch (error) {
        res.status(500).json(error)
    }
})

//Login
router.post('/login', async (req:Request,res:Response) => {
    try {
        const user = await User.findOne({
            username: req.body.username,
        })
        !user || user.password !== req.body.password
        ? res.status(401).json('Wrong credentials') 
        : res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports =  router;