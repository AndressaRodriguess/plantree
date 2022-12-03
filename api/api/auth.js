const app = require("../app");
const route = require("../routes/auth");

app.use("/api/", route);

module.exports = app;