const {Router} = require("express");
const {verifyJWT} = require("../middleware/AuthenticationMiddleware");

const TreePlantedController = require("../controllers/TreePlantedController");

const routes = Router();

routes.get("/trees_planted/", TreePlantedController.getAll);
routes.post("/trees_planted", TreePlantedController.create);
routes.get("/trees_planted/:id", TreePlantedController.get);
routes.put("/trees_planted/:id", TreePlantedController.update);
routes.delete("/trees_planted/:id", TreePlantedController.delete);

module.exports = routes;