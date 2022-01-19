const express = require("express");
const { setupRoutes } = require("./controllers");
const cors = require("cors");
const app = express();
import "dotenv/config";

const connection = require("./db-config");

app.use(
  cors({
    origin: "*",
  })
);

const port = 8000;

app.use(express.json());
app.app // GET ----------------------------
  .get("/coucou", (req, res) => {
    res.status(200).send("hibou");
  });

// POST ---------------------------

// PUT ---------------------------

// LISTEN -------------------------

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
