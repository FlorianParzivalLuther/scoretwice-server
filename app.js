require("dotenv/config");
require("./db");
const express = require("express");
const { isAuthenticated } = require("./middleware/jwt.middleware");

const app = express();

require("./config")(app);

// 👇 Start handling routes here
const allRoutes = require("./routes");
app.use("/api", allRoutes);

const projectRouter = require("./routes/project.routes");
app.use("/api", isAuthenticated, projectRouter);

const taskRouter = require("./routes/task.routes");
app.use("/api", isAuthenticated, taskRouter);

const transactionRouter = require("./routes/transactions.routes");
app.use("/auth", transactionRouter);

const userRouter = require("./routes/user.routes");
app.use("/api", isAuthenticated, userRouter);

const authRouter = require("./routes/auth.routes");
app.use("/auth", authRouter);

// const accountRouter = require("./routes/account.routes");
// app.use("/api", accountRouter);

require("./error-handling")(app);

module.exports = app;
