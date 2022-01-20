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

userRouter.post("/:id_user/products/", async (req, res) => {
    const { id_user } = req.params;
    const { id_product } = req.body
    try {
      const insertID = await Product.createUserProduct(id_user,id_product);
      if (insertID) return res.status(201).json({id_user: id_user, id_product:id_product });
      else return res.status(404).json('RESSOURCE NOT FOUND')
    } catch (err) {
      return res.status(500).json(err);
    }
  });

  userRouter.delete("/:id_user/products/:id_product", async (req, res) => {
    const { id_user,id_product } = req.params;
    try {
      const result = await Product.destroyUserProduct(id_user,id_product);
      if (result) return res.status(204).json();
      else return res.status(404).json('RESSOURCE NOT FOUND')
    } catch (err) {
      return res.status(500).json(err.message);
    }
  });

module.exports = userRouter;
