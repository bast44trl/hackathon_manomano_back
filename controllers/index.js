// const userRouter = require("./user");
const listRouter = require("./lists");

const setupRoutes = (app) => {
  // app.use("/api/users", userRouter);
  app.use("/api/lists", listRouter)
};

module.exports = {
  setupRoutes,
};
