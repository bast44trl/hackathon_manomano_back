const productsRouter = require("express").Router();
const Product = require("../models/product");
const ProductsList = require("../models/product_list");

productsRouter.get("/", (req, res) => {
  Product.getAll()
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error retrieving products from database");
    });
});

productsRouter.get("/:id", (req, res) => {
  Product.getOne(req.params.id)
    .then((product) => {
      if (product) {
        res.json(product);
      } else {
        res.status(404).send("Product not found");
      }
    })
    .catch((err) => {
      res.status(500).send("Error retrieving the product from the database");
    });
});

productsRouter.post("/", async (req, res) => {
  try {
    const product = req.body;
    product.id_product = await Product.create(product);
    res.status(201).json(product);
  } catch (err) {
    next(err);
  }
});

productsRouter.get("/:id_list/productList", (req, res) => {
  ProductsList.findProductsFromList(req.params.id_list)
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send("Error retrieving products of the list from database");
    });
});

module.exports = productsRouter;
