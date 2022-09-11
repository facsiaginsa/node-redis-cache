const { getCache } = require("../models/redis")

const findAllProductsOnCache = async (req, res) => {

    let product = await getCache("product-all")
    
    if (product && product != "null") {
        res.status(200).send({
            message: "get all products success from cache",
            products: product
        })
        return
    }
}

const findProductOnCache = async (req, res) => {

    const productId = req.params.id

    let product = await getCache("product-" + productId)
    
    if (product && product != "null") {
        res.status(200).send({
            message: "get all products success from cache",
            products: product
        })
        return
    }
}

module.exports = {
    findAllProductsOnCache,
    findProductOnCache
}