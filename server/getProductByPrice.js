const products = require("../products.json")

let getProductByPrice = (req, res) => {
    let {price} = req.query
    let priceArray = products.filter((products) => +products.price >= +price)
    res.send(priceArray)
}



module.exports = getProductByPrice