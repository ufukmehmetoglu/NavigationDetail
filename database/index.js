const mongoose = require('mongoose')

var db = mongoose.connect(`mongodb+srv://root:${process.env.DATABASE_PASSWORD}@cluster0-vv3ep.mongodb.net/test?retryWrites=true&w=majority`,{useNewUrlParser: true})


//Testing database connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Succesfully connected to database')
})

module.exports = db;