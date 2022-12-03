const plantation_locations = require("express").Router();
const { verifyJWT } = require("../api/middleware/AuthenticationMiddleware");
const PlantationLocal = require("../api/repositories/database/model/PlantationLocal");

plantation_locations.get("/plantation_locations", verifyJWT, async function (req, res) {
    try {
        const user_id = req.user_id;
        const local = await PlantationLocal.findAll({ where: { user_id }});
        response.status(200).json(local);
      } catch (error) {
        response.status(400).send(error);
      }
});

plantation_locations.post("/plantation_locations", verifyJWT, async function (req, res) {
    try {
        const plantation_locations = await plantation_locations.create(req.body);
        res.status(201).json(plantation_locations);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = plantation_locations;