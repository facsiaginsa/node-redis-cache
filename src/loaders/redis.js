const Redis = require("ioredis");
const { redisConfig } = require("../configs");

const redis = new Redis({
    port: redisConfig.port, 
    host: redisConfig.host,
    password: redisConfig.pass,
});

module.exports = redis