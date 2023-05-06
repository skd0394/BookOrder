const express=require('express')
const { connection } = require('./db')
const {authRoute}=require('./src/Routes/auth.Routes')
const {bookRoute}=require('./src/Routes/books.Routes')
const {orderRoute}=require('./src/Routes/orders.Routes')
const {auth}=require("./src/Middleware/auth")
const app=express()

app.use(express.json())

app.use('/api',authRoute)
app.use('/api',orderRoute)
app.use(auth)
app.use('/api',bookRoute)

app.listen(4000,async()=>{
    try {
        await connection
        console.log('connected to the Database')
    } catch (error) {
        console.log('Not Connected')
    }
    console.log('server is running on port 4000')
})