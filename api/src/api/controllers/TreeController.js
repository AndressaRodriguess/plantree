const Tree = require("../repositories/database/model/Tree");

module.exports = {
  async getAll(request, response) {
    try {
      const trees = await Tree.findAll();

      response.status(200).json(trees);
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async create(request, response) {
    try {
      const tree = await Tree.create(request.body);

      response.status(201).json(tree);
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async get(request, response) {
    try {
      const id = request.params.Tree_id;
      const Tree = await Tree.findOne({ where: { id } });

      if (!Tree) {
        return response.status(404).json("Árvore não encontrada");
      }

      response.status(200).json(Tree);
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async update(request, response) {
    try {
      const { name, image, body, user_id } = request.body;
      const id = request.params.Tree_id;
      const Tree = await Tree.findOne({ where: { id } });

      if (!Tree) {
        return response.status(404).json("Árvore não encontrada");
      }

      Tree.name = name;
      Tree.image = image;
      Tree.body = body;
      Tree.user_id = user_id;

      await Tree.save();
      response.status(202).json("Árvore atualizada com sucesso");
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async delete(request,response){
    try {
      const id = request.params.id;
      const Tree = await Tree.destroy({ where: { id } });

      if (!Tree) {
        return response.status(404).json("Árvore não encontrada");
      }

      response.status(202).json("Árvore deletada");
    } catch (error) {
      response.status(400).send(error);
    }
  }
};
