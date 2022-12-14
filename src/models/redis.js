const { cacheExpired } = require("../configs")
const redis = require("../loaders/redis")

const getCache = async (key) => {

    let result = JSON.parse(await redis.get(key))

    return result
}

const setCache = async (key, value) => {
    
    let stringifiedValue = JSON.stringify(value)

    return await redis.setex(key, cacheExpired, stringifiedValue)
}

module.exports = {
    getCache, 
    setCache
}