const express = require("express");
const { setupRoutes } = require("./controllers");
const cors = require("cors");
const app = express();

const connection = require("./db-config");

const port = 8000;

app.use(
  cors({
    origin: "*",
  })
);

setupRoutes(app);

app.use(express.json());
// app.app // GET ----------------------------
//   .get("/coucou", (req, res) => {
//     res.status(200).send("hibou");
//   });

// POST ---------------------------

// PUT ---------------------------

// LISTEN -------------------------

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
