import {Router} from 'express'
const router = Router()
const authRuter =require( './auth')
const userRuter =require( './user')

router.use('/auth',authRuter)
router.use('/users',userRuter)


module.exports =  router;