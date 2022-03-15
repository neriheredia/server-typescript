import {Router,Request,Response} from 'express'
const User = require('../models/User')
const router = Router()

//Update
router.put('/:id', async (req:Request,res:Response) => {
    try {
        const updateUser = await User.findByIdAndUpdate(
            req.params.id, 
            {
                $set: req.body
            },
            {new:true}
        )
        res.status(200).json(updateUser)
    } catch (error) {
        res.status(500).json(error)
    }
})

//Delete
router.delete('/:id', async (req:Request,res:Response) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json('User has been delted...')
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports =  router;