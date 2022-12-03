const routes = require("express").Router();

const trees = require("./trees");
const trees_planted = require("./trees_planted");
const plantation_locations = require("./plantation_locations");
const auth = require("./auth");

routes.get("/", async function (req, res) {
  res.send(`Hellooo`);
});

routes.use("/", trees);
routes.use("/", trees_planted);
routes.use("/", plantation_locations);
routes.use("/", auth);

module.exports = routes;