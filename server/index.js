const express = require("express")
const products = require("../products.json")
const getProducts = require("./getProducts")
const getProductById = require("./getProductById")
const getProductByPrice = require("./getProductByPrice")
const app = express()
const port = 5000

app.get("/api/products", getProducts)
app.get("/api/products/:id", getProductById)
app.get("/api/product", getProductByPrice)
app.listen(5000, () => {console.log("I am running")})