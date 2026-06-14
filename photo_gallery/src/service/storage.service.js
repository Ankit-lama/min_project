const ImageKit = require('@imagekit/nodejs');

const image = new Imagekit({
    privateKey: process.env.PRIVATE_KEY,
})

async function uploadFile(buffer){
    const result = await image.files.upload({
        file:buffer.toString("base64"),
        filename:'image.jpg'})
        return result;
}

module.exports = uploadFile;