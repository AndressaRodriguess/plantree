const app = require("../app");
const route = require("../routes/plantation_locations");

app.use("/api/", route);

module.exports = app;