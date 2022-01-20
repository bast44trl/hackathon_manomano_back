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

app.use(express.json());
setupRoutes(app);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
