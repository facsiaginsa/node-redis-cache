const app = require("./loaders/fastify")
const { port, host } = require("./configs")
const { selectAllProduct, selectProductById } = require("./models/mysql")
const { findAllProductsOnCache, findProductOnCache } = require("./middleware/cache")
const { setCache } = require("./models/redis")

app.get("/hello", async (req,res) => {
    res.status(200).send({
        hello: "world"
    })
})

app.get("/products", async (req,res) => {
    let result = await selectAllProduct()
    
    res.status(200).send({ 
        message: "get all products success",
        products: result 
    })
})

app.get("/products/:id", async (req,res) => {
    let productId = req.params.id

    let result = await selectProductById(productId)

    res.status(200).send({
        message: "get all products success",
        products: result
    })
})

app.get("/products-with-cache", { onRequest: findAllProductsOnCache }, async (req,res) => {
    let result = await selectAllProduct()
    
    res.status(200).send({ 
        message: "get all products success",
        products: result 
    })

    setCache("product-all", result)
})

app.get("/products-with-cache/:id", { onRequest: findProductOnCache }, async (req,res) => {
    let productId = req.params.id

    let result = await selectProductById(productId)

    res.status(200).send({
        message: "get all products success",
        products: result
    })

    setCache("product-" + productId, result)
})

app.listen({ port,host }, () => {
    console.log("app listen on port " + port)
})