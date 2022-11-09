const {Router} = require("express");
const {verifyJWT} = require("../middleware/AuthenticationMiddleware");

const TreePlantedController = require("../controllers/TreePlantedController");

const routes = Router();

routes.get("/trees_planted/", verifyJWT, TreePlantedController.getAll);
routes.post("/trees_planted", verifyJWT, TreePlantedController.create);
routes.get("/trees_planted/:id", verifyJWT, TreePlantedController.get);
routes.put("/trees_planted/:id", verifyJWT, TreePlantedController.update);
routes.delete("/trees_planted/:id", verifyJWT, TreePlantedController.delete);

module.exports = routes;