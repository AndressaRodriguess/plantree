const {Router} = require("express");
const {verifyJWT} = require("../middleware/AuthenticationMiddleware");

const PlantationLocalController = require("../controllers/PlantationLocalController");

const routes = Router();

routes.get("/plantation_locations", verifyJWT, PlantationLocalController.getAll);
routes.post("/plantation_locations", verifyJWT, PlantationLocalController.create);
routes.get("/plantation_locations/:id", verifyJWT, PlantationLocalController.get);
routes.delete("/plantation_locations/:id", verifyJWT, PlantationLocalController.delete);

module.exports = routes;