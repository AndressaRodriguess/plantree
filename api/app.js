const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const TreeRoutes = require("./src/api/routes/TreeRouter");
const TreePlantedRoutes = require("./src/api/routes/TreePlantedRouter");
const PlantationLocalRoutes = require("./src/api/routes/PlantationLocalRouter");
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(TreeRoutes);
app.use(TreePlantedRoutes);
app.use(PlantationLocalRoutes);

module.exports = app;