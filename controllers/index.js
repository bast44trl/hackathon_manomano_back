const productsRouter = require("./products");
const listRouter = require("./lists");
 
const setupRoutes = (app) => {
  app.use("/api/products", productsRouter);
  app.use("/api/lists", listRouter)
};

module.exports = {
  setupRoutes,
};
