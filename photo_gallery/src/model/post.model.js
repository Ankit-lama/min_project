const mongoose = require('mongoose');

const photoSchema = new monggose.Schema(
    {
     image:String,
     caption:String,
    }
)

const Photo = monggose.model('Photo', photoSchema);

module.exports = Photo;