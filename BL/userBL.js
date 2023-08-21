const productDal = require('../DAL/userDal');
const { products } = require('../data');

const getAllProducts = (req,res) => {
    const products = productDal.getProducts()
    return products
}

const getProductById = (id) => {
    const products = productDal.getProducts()
    for (let i = 0; i < products.length; i++) {
        if (products[i].id.toString() === id) {
            return products[i]
        }
    }
    throw `no product with id ${id}`
}

const addProduct = (info) => {
    const products = productDal.getProducts()
    // const keysArr = [id, title ,description ,price ,category ,image ,quantity,rating,rate,count]
    for (let i = 0; i < Object.values(info).length; i++) {
        if (Object.values(info)[i] === ""||Object.values(info)[i] === undefined) {
            throw `there's an empty field`
        }
    }
    const title = info.title;
    const description = info.description; 
    const price = info.price; 
    const category = info.category; 
    const image = info.image; 
    const quantity = info.quantity; 
    const rating = info.rating; 

    const newProduct = {
        title: title,
        description: description,
        price: price,
        category: category,
        image: image,
        quantity: quantity,
        rating: rating
    }
    products.push(newProduct)
    return products
}

const editProduct = (id, info) => {
    const products = productDal.getProducts()
    let selectedProduct = "";
    for (let i = 0; i < products.length; i++) {
        if (products[i].id.toString() === id) {
            selectedProduct = products[i];
            selectedProduct.id = id;
            selectedProduct.title = info.title;
            selectedProduct.description = info.description;
            selectedProduct.price = info.price;
            selectedProduct.category = info.category;
            selectedProduct.image = info.image;
            selectedProduct.quantity = info.quantity;
            selectedProduct.rating = info.rating;
            return products
        }
    }
}

const deleteProduct = (req, res) => {
    const products = productDal.getProducts()
    const id = req.params.id;
    let selectedProduct = "";
    for (let i = 0; i < products.length; i++) {
        if (products[i] === id) deleteIndex = i;
    }
    products.splice(deleteIndex, 1);
    return products
}

const addQuantity = (req, res) => {
    const products = productDal.getProducts()
   const id = req.params.id;
   let selectedProduct = "";
    for (let i = 0; i < products.length; i++) {
        if (products[i] === id) selectedProduct = products[i];
    }
    selectedProduct.quantity++;
    return products
}

const subQuantity = (req, res) => {
    const products = productDal.getProducts()
    const id = req.params.id;
   let selectedProduct = "";
    for (let i = 0; i < products.length; i++) {
        if (products[i] === id) selectedProduct = products[i];
    }
    selectedProduct.quantity--;
    return products
}


module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    editProduct, 
    deleteProduct, 
    addProduct, 
    subQuantity
    }



