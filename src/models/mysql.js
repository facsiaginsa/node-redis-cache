const dbConnection = require("../loaders/mysql")

const selectAllProduct = async () => {
    try {
        let [rows] = await dbConnection.query("SELECT * FROM products")
        return rows
    } catch (error) {
        console.log(error)
    }
    
}

const selectProductById = async (productId) => {
    try {
        let [rows] = await dbConnection.query("SELECT * FROM products WHERE id=?", [ productId ])
        return rows
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    selectAllProduct,
    selectProductById
}