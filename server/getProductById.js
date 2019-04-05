const products = require("../products.json")

const getProductById = (req, res) => {
    let {id} = req.params
    // console.log(id)
    for(let i = 0; i < products.length; i++){
        if(products[i].id === +id){
            res.send(products[i])
        }
    }res.send("Does not Exist")
        }


module.exports = getProductById