const TreePlanted = require("../repositories/database/model/TreePlanted");

module.exports = {
  async getAll(request, response) {
    try {
      const trees_planted = await TreePlanted.findAll();
      response.status(200).json(trees_planted);
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async create(request, response) {
    try {
      const tree_planted = await TreePlanted.create(request.body);
      response.status(201).json(tree_planted);
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async get(request, response) {
    try {
      const id = request.params.id;
      const tree_planted = await TreePlanted.findOne({ where: { id } });

      if (!tree_planted) {
        return response.status(404).json("Árvore não encontrada");
      }

      response.status(200).json(tree_planted);
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async update(request, response) {
    try {
      const { name, description, date, local_id, user_id } = request.body;
      const id = request.params.id;
      const tree = await TreePlanted.findOne({ where: { id } });

      if (!tree) {
        return response.status(404).json("Árvore plantada não encontrada");
      }

      tree.name = name;
      tree.description = description;
      tree.date = date;
      tree.user_id = user_id;
      tree.local_id = local_id;

      await tree.save();
      response.status(200).json("Árvore plantada atualizada com sucesso");
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async delete(request,response){
    try {
      const id = request.params.id;
      const tree_planted = await TreePlanted.destroy({ where: { id } });

      if (!tree_planted) {
        return response.status(404).json("Árvore não encontrada");
      }

      response.status(202).json("Árvore deletada");
    } catch (error) {
      response.status(400).send(error);
    }
  }
};
