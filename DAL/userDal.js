const products = require('../data')

// const fs = require('fs');

// const getProducts = (req, res) => {
//     const data = fs.readFileSync('data.js', {encoding: "utf-8"})
//     const products = JSON.parse(data)
//     return products
// }

const getProducts = () => {
    return products
}

module.exports = {getProducts}


