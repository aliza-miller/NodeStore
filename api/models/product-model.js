const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true},
        rating: { type: Number, required: true },
        variety: { type: [String], required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('products', Product)