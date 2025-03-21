const mongoose = require('mongoose');

const collectionsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image_ids: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'images',
        required: false
    },
    total_images: {
        type: Number,
        required: false,
        default: 0
    }
}, { timestamps: true });

module.exports = mongoose.model("collections", collectionsSchema, "collections");