const mongoose = require('mongoose');

const userModel = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        dni: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: false
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const ModelUser = mongoose.model("usuarios", userModel);
module.exports = ModelUser;
