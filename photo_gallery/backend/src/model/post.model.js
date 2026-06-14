const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema(
    {
     image:String,
     caption:String,
    }
)

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;