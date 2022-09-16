const {Router} = require("express");
const {verifyJWT} = require("../middleware/AuthenticationMiddleware");

const UserController = require("../controllers/UserController")

const routes = Router();

routes.post("/user", UserController.createUser);
routes.get("/user/:id", verifyJWT, UserController.getUser);
routes.delete("/user/:id", verifyJWT, UserController.removeUser);
routes.put("/user/:id", verifyJWT, UserController.updateUser);

module.exports = routes;