// const adminData = require("../routes/admin");
// const products = [];
const Product = require('../models/product');
exports.getAddProduct = (req, res, next) => {

    res.render("add-product", {
        pageTitle: "Add Product",
        path: "/admin/admin-product",
        activeProduct: true,
        productCSS:true,
    });
}

exports.postAddProduct = (req, res, next) => {
    // products.push({ title: req.body.title });
    console.log("req.body", req.body);
    const { title,description, amount } = req.body;
    const product = new Product(title, description, amount);

    product.save();
    res.redirect("/");
}

exports.getProducts =  (req, res, next) => {
    Product.fetchAll(products => {
    res.render("shop", {
        prods: products,
        pageTitle: "shop",
        path: "/",
        hasProducts: products.length > 0,
        activeShop: true,
        productCss: true,
    });

    })
}

exports.deleteAddedProduct = (req, res, next) => {
    console.log("req.body", req.params.id);


}

