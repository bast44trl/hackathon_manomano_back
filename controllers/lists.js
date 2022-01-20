const listRouter = require("express").Router();
const List = require("../models/list");
const Lists_product = require("../models/lists_product");

listRouter.get("/", (req, res) => {
  List.getAllList()
    .then(([results]) => {
      res.status(200).json(results);
    })
    .catch((error) => {
      res.status(500).send("erreur");
    });
});

listRouter.get("/:id", (req, res) => {
  List.getOneList(req.params.id)
    .then(([list]) => {
      if (list.length > 0) {
        res.json(list);
      } else {
        res.status(404).send("List not found");
      }
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

listRouter.get("/:id_list/productList", (req, res) => {
  Lists_product.getProductsByList(req.params.id_list)
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      res
        .status(500)
        .send("Error retrieving products of the list from database");
    });
});

listRouter.post("/", (req, res) => {
  const { id_user, name } = req.body;
  List.postList(req.body)
    .then((list) => res.status(201).json(list))
    .catch((err) => res.sendStatus(404));
});

listRouter.put("/:id_list", (req, res) => {
  const id_list = req.params.id_list;
  List.update(Number(id_list), req.body).then((rep) =>
    rep ? res.status(200).json(req.body) : res.status(404)
  );
});

listRouter.delete("/:id_list", async (req, res, next) => {
  try {
    const { id_list } = req.params;
    const listDeleted = await List.deleteOneList(id_list);
    if (listDeleted) {
      res.status(200).send("List deleted");
    } else {
      throw (500, "This list cannot be deleted");
    }
  } catch (err) {
    next(err);
  }
});

module.exports = listRouter;
