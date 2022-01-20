const userRouter = require("express").Router();
const User = require("../models/user");
const Product = require("../models/product");

userRouter.get("/:id_user/products/", async (req, res) => {
  const { id_user } = req.params;
  try {
    const products = await Product.getAllByUser(id_user);
    if (products) return res.send.status(200).json(products);
    else return res.send.status(404).json('RESSOURCE NOT FOUND')
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = userRouter;
