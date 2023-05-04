const express = require('express')
const adminRouter = require('./routes/admin.router')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const mongoDb = require('./config/database')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(cors())
app.use(adminRouter)

mongoDb().then(res => {
    console.log("Mongodb connected")
    app.listen(5000,() => {
        console.log("server is running on port 5000")
    })
})
.catch(err => {
    console.log("Some problem"+err)
})

