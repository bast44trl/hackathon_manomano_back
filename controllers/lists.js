const listRouter = require("express").Router();
const List = require("../models/list");


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
        })
});

listRouter.post("/", (req, res) => {
    console.log(req)
    const { id_user, name} = req.body
    console.log(id_user, name)
	List.postList(req.body)
        .then((list) => res.status(201).json(list))
        .catch((err) => res.sendStatus(404));
});  

listRouter.delete('/:id', async (req, res) => {
    console.log(req.params.id)
    const listDeleted = await List.deleteOneList(req.params.id);
    listDeleted ? res.sendStatus(204) : res.sendStatus(404);
  });


module.exports = listRouter;