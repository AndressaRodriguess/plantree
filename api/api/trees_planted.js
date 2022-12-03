const app = require("../app");
const route = require("../routes/trees_planted");

app.use("/api/", route);

module.exports = app;