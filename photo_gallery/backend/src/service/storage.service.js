const ImageKit = require('@imagekit/nodejs');

const image = new ImageKit({
    privateKey: process.env.PRIVATE_KEY,
})

async function uploadFile(buffer){
    const result = await image.files.upload({
        file:buffer.toString("base64"),
        fileName:'image.jpg'})
        return result;
}

module.exports = uploadFile;