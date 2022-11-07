const {Router} = require("express");
const {verifyJWT} = require("../middleware/AuthenticationMiddleware");

const UserController = require("../controllers/UserController")

const routes = Router();

routes.post("/users", UserController.createUser);
routes.get("/users/", verifyJWT, UserController.getAllUsers);
routes.get("/users/:user_id", verifyJWT, UserController.getUser);
routes.delete("/users/:user_id", verifyJWT, UserController.removeUser);
routes.put("/users/:user_id", verifyJWT, UserController.updateUser);

module.exports = routes;