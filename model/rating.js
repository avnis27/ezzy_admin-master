const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
    user_id: {
        type: String, 
        required: false
    },
    product_id: {
        type: String, 
        required: false
    },
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        unique: false
    },
    review: {
        type: String,
        unique: false
    },
    ratings: {
        type: Number,
        unique: false
    },
    average_rating: {
        type: Number,
        unique: false
    },
    type: {
        type: String,
        required: false
    },
    created_at: {
        type: String,
    },
    updated_at: {
        type: String
    }
})
module.exports = mongoose.model('Rating', ratingSchema);