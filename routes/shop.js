const express = require("express");
const path = require("path");

const router = express.Router();

const adminData = require("./admin");

router.get("/", (req, res, next) => {
  console.log("admin", adminData.products);

  const products = adminData.products;
  // res.send("<h1>Hello sandip keep going!</h1>");
  // res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
  res.render("shop", {
    prods: products,
    pageTitle: "shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCss: true,
  });
});

module.exports = router;
