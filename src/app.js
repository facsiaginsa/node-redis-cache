const app = require("./loaders/fastify")
const { port, host } = require("./configs")

app.get("/hello", async (req,res) => {
    res.status(200).send({
        hello: "world"
    })
})

app.get("/products", async (req,res) => {

})

app.listen({ port,host }, () => {
    console.log("app listen on port" + port)
})