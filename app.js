require('dotenv').config()
const express = require('express')
const app = express()
const connectDB=require('./config/mongoose')
connectDB()
let port=process.env.PORT
app.set('view engine','ejs')
app.use(express.static('static'))
app.use(express.urlencoded({extended:false}))

const homerouter=require('./router/ViewHome')
app.use('/',homerouter)
app.listen(port,()=>{console.log("connected to 3000");})