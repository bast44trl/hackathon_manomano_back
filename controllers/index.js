const productsRouter = require("./products");
const listRouter = require("./lists");
const lists_productsRouter = require("./lists_products");
const userRouter = require('./users')

const setupRoutes = (app) => {
  app.use("/api/products", productsRouter);
  app.use("/api/lists", listRouter);
  app.use("/api/lists_products", lists_productsRouter);
  app.use('/api/users', userRouter)
  
};

module.exports = {
  setupRoutes,
};
