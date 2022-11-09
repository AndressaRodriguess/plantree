const PlantationLocal = require("../repositories/database/model/PlantationLocal");

module.exports = {
  async getAll(request, response) {
    try {
      const local = await PlantationLocal.findAll();

      response.status(200).json(local);
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async create(request, response) {
    try {
      const local = await PlantationLocal.create(request.body);
      response.status(201).json(local);
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async get(request, response) {
    try {
      const id = request.params.id;
      const local = await PlantationLocal.findOne({ where: { id } });

      if (!local) {
        return response.status(404).json("Local não encontrado");
      }

      response.status(200).json(local);
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async delete(request,response){
    try {
      const id = request.params.id;
      const local = await PlantationLocal.destroy({ where: { id } });

      if (!local) {
        return response.status(404).json("Local não encontrado");
      }

      response.status(202).json("Local de plantação deletado");
    } catch (error) {
      response.status(400).send(error);
    }
  }
};
