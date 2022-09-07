"use strict";
const mongoose_1 = require("mongoose");
const connectDB = (url) => {
    return (0, mongoose_1.connect)(url)
        .then(() => console.log('DataBase is connected'))
        .catch((error) => console.error(error));
};
module.exports = connectDB;
