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

let PORT = process.env.PORT;
if (PORT == null || PORT == "") {
  PORT = 8000;
}
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
