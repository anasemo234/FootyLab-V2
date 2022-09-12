const mongoose = require('mongoose')

const kitSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    img: String,
    price: { type: Number, minimum: 0 },
    qty: { type: Number, minimum: 0 },

})

const Kit = mongoose.model('Kit', kitSchema)

module.exports = Kit