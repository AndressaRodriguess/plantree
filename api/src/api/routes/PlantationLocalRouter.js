const {Router} = require("express");
const {verifyJWT} = require("../middleware/AuthenticationMiddleware");

const PlantationLocalController = require("../controllers/PlantationLocalController");

const routes = Router();

routes.get("/plantation_locations", PlantationLocalController.getAll);
routes.post("/plantation_locations:", PlantationLocalController.create);
routes.get("/plantation_locations:/:id", PlantationLocalController.get);
routes.delete("/plantation_locations:/:id", PlantationLocalController.delete);

module.exports = routes;