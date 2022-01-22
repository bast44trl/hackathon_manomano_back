const express = require("express");
const { setupRoutes } = require("./controllers");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
setupRoutes(app);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);
