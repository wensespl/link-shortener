"use strict";
const dotenv_1 = require("dotenv");
const redis_1 = require("redis");
(0, dotenv_1.config)();
const REDIS_URL = process.env.REDIS_URL;
const redisClient = (0, redis_1.createClient)({
    url: REDIS_URL
});
module.exports = redisClient;
