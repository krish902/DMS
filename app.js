const express = require('express')
const morgan = require('morgan')

const createError = require('http-errors')
require('dotenv').config()
require('./helpers/init_mongodb')

const AuthRoute = require('./Routes/Auth.route')

const app = express()
app.use(morgan('dev'))

app.get('/', async (req,res,next) => {
    res.send("Hello from Express")
})

app.use('/auth',AuthRoute)

// all error routes handle by this
app.use(async (req,res,next) => {
    const error = new Error("Not Found")
    error.status = 404
    next(error)
    //next triggers error fn
    // or 
    // next(createError.NotFound())
})

// this is what we have to print
app.use(async (err,req,res,next) => {
    res.status(err.status || 500)
    res.send({
        error : {
            status: err.status || 500,
            message: err.message,
        }
    })

})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Server is running on port 3000")
})