const {Router} = require("express");
const {verifyJWT} = require("../middleware/AuthenticationMiddleware");

const TreeController = require("../controllers/TreeController");

const routes = Router();

routes.get("/trees/", TreeController.getAll);
routes.post("/trees", TreeController.create);
routes.get("/trees/:id", TreeController.get);
routes.put("/trees/:id", TreeController.update);
routes.delete("/trees/:id", TreeController.delete);

module.exports = routes;