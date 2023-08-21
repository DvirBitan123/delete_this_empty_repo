const productBL = require('../BL/userBL');


const AllProducts = (req, res) => {
    const products = productBL.getAllProducts()
    res.send(products)
}

const prodById = (req, res) => {
    try{
        const id = req.params.id;
        const chosenProduct = productBL.getProductById(id);
        res.send(chosenProduct)
    }
    catch (err){
        res.send(err)
    }
  
}

const addProduct = (req, res) => {
    try {
        const info = req.body;
        const updatedProducts = productBL.addProduct(info);
        res.send(updatedProducts)
    }
    catch(err) {
        res.send(err)
    }
}

const editProduct = (req, res) => {
    try{
        const id = req.params.id;
        const info = req.body;
        updatedProducts = productBL.editProduct(id, info)
        res.send(updatedProducts)
    }
    catch(err) {
        res.send(err)
    }
}

module.exports = {AllProducts, prodById, addProduct, editProduct}


