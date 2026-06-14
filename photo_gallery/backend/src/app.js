const express = require('express');
const multer = require('multer');
const store = require("../src/service/storage.service");
const model= require("../src/model/post.model");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

app.post('/upload',upload.single('image'),async(req,res)=>{
    const result = await store(req.file.buffer);
    const post = await model.create({
        image:result.url,
        caption:req.body.caption
    })
    return res.status(200).json({message: "Post created successfully",post});
})

app.get('/posts',async(req,res)=>{
    const posts = await model.find();
    return res.status(200).json({message: "Posts fetched successfully", posts});
})

module.exports = app;