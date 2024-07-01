const mongoose = require('mongoose');

const URI = 'mongodb+srv://Cluster05051:EZMPM5LUqHzTG2jG@cluster05051.wiq9asc.mongodb.net/empleados';

mongoose.connect(URI)

    .then(db => console.log('DB is connected'))

    .catch(err => console.error(err));

module.exports = mongoose;