const mongoose = require('mongoose');

async function connectdb() {
    try{
        await monggose.connect(process.env.DB);
        console.log("Connected to database");
    }catch{
        console.log("Error connecting to database");
    }
}

module.exports = connectdb;