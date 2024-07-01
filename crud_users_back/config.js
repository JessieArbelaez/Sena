const ModelUser = require("./model");

const mongoose = require('mongoose');

const dbconnect = async () => {
    mongoose.set('strictQuery', true);
    mongoose.connect("mongodb+srv://Cluster05051:EZMPM5LUqHzTG2jG@cluster05051.wiq9asc.mongodb.net/users_ufo")
        .then(() => console.log("Conexión exitosa"))
        .catch((err) => console.log('Error de conexión:', err.message));
}

module.exports = dbconnect;


