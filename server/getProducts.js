const products = require("../products.json")

let getProducts = (req, res) => {res.send(products)}


module.exports = getProducts