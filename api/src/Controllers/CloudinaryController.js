const { cloudinary } = require('../Utils/cloudinary.js');
const { Users } = require("../db.js");

require('dotenv').config();



const uploadImage = async (req, res) => {
    try {
        const fileStr = req.body.data;
        const userLogged = req.body.id
        console.log(userLogged)
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: process.env.UPLOAD_PRESENT,
            public_id: userLogged
        });
        const updateUserImage = await Users.update({
            image: uploadResponse.url
        },{
            where: {id: userLogged }
        })
        console.log(uploadResponse);
        res.json(uploadResponse);
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
};

module.exports = { uploadImage }