const app = require("../app");
const route = require("../routes/trees");

app.use("/api/", route);

module.exports = app;