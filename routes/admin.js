const path = require("path");
const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products");

// this is a test


router.get("/add-product",productsController.getAddProduct);

router.post("/add-product", productsController.postAddProduct);

router.get("/delete-product/:id",productsController.deleteAddedProduct)

module.exports = router




