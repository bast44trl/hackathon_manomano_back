const userRouter = require("./user");

const setupRoutes = (app) => {
  app.use("/api/users", userRouter);
};

module.exports = {
  setupRoutes,
};
