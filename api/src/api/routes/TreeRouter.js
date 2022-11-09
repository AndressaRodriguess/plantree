const {Router} = require("express");
const {verifyJWT} = require("../middleware/AuthenticationMiddleware");

const TreeController = require("../controllers/TreeController");

const routes = Router();

routes.get("/trees", verifyJWT, TreeController.getAll);
routes.post("/trees", verifyJWT, TreeController.create);
routes.get("/trees/:tree_id", verifyJWT, TreeController.get);
routes.put("/trees/:tree_id", verifyJWT, TreeController.update);
routes.delete("/trees/:tree_id", verifyJWT, TreeController.delete);

module.exports = routes;