const mongodb = require('mongoose')
const dbUrl = "mongodb://localhost:27017/kafee"

module.exports = () => {
    return mongodb.connect(dbUrl)
}