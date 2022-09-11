require("dotenv").config()

module.exports = {
    port: parseInt(process.env.PORT) || 3000,
    host: process.env.HOST || "0.0.0.0",
    cacheExpired: process.env.CACHE_EXPIRED,
    redisConfig: {
        host: process.env.REDIS_HOST || "127.0.0.1",
        port: process.env.REDIS_PORT || "6379",
        pass: process.env.REDIS_PASS
    },
    dbConfig: {
         host: process.env.DB_HOST || "127.0.0.1",
         port: process.env.DB_PORT || "3306",
         user: process.env.DB_USER,
         password: process.env.DB_PASS,
         name: process.env.DB_NAME
    }
}