const express=require('express')
const { ViewProfile, feedback } = require('../controller/home')
const router=express.Router()
router
    .route('/')
    .get(ViewProfile)
    .post(feedback)

module.exports=router