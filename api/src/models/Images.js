const mongoose = require('mongoose');

const imagesSchema = new mongoose.Schema({
    image_url: {
        type: String,
        required: true,
        unique: true
    },
    collection_id: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'collections',
        required: false,
        default: [],
    }
}, { timestamps: true });

module.exports = mongoose.model("images", imagesSchema, "images");