const express = require('express');
const multer = require('multer');
const store = require("../src/service/storage.service");
const model= require("../src/model/post.model");



const app = express();

app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

app.post('/upload',upload.single('image'),async(req,res)=>{
    const result = await store(req.file.buffer);
    const post = await model.create({
        image:result.url,
        caption:req.body.caption
    })
    res.status(200).json(post);
})

app.get('/posts',async(req,res)=>{
    const posts = await model.find();
    res.status(200).json(posts);
})

module.exports = app;