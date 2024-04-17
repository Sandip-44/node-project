const express = require("express");

const path = require("path");

const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  // res.send(
  //   "<form action='/admin/add-product' method ='POST'><input type='text' name ='title' /><button type ='submit'>Add Product</button></form>"
  // );

  // res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/admin-product",
    activeProduct: true,
  });
});

router.post("/add-product", (req, res, next) => {
  console.log("requestbody", req.body);

  products.push({ title: req.body.title });

  res.redirect("/");
});

exports.routes = router;

exports.products = products;

// module.exports = router;
