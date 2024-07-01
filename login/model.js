const mongoose = require('mongoose');

const userModel = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const ModelUser = mongoose.model("usuarios", userModel);
module.exports = ModelUser;
