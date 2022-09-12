// === Dependencies === //
const express = require('express');
const app = express()
const { default: mongoose } = require('mongoose');
const Kit = require('./models/kit')
const methodOverride = require('method-override');
require('dotenv').config()


// === Database Configuration === //
const MONGODB_URI = process.env.MONGODB_URI
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    // useUnifiedToplogy: true,
});


// === MIDDLEWARE === //
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
const kitController = require('./controllers/kits')
app.use('/kits', kitController)







// === Database Connection Error/Success === //
const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));












app.listen(3000, () => {
    console.log('listening......');
})