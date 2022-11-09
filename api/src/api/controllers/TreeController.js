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
      const id = request.params.tree_id;
      const tree = await Tree.findOne({ where: { id } });

      if (!tree) {
        return response.status(404).json("Árvore não encontrada");
      }

      response.status(200).json(tree);
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async update(request, response) {
    try {
      const { name, family, scientific_name, origin, division, genus, specie, group, description } = request.body;
      const id = request.params.tree_id;
      const tree = await Tree.findOne({ where: { id } });
 
      if (!tree) {
        return response.status(404).json("Árvore não encontrada");
      }

      tree.name = name;
      tree.family = family;
      tree.scientific_name = scientific_name;
      tree.origin = origin;
      tree.division = division;
      tree.genus = genus;
      tree.class = request.body.class;
      tree.specie = specie;
      tree.group = group;
      tree.description = description;

      await tree.save();
      response.status(202).json("Árvore atualizada com sucesso");
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async delete(request,response){
    try {
      const id = request.params.tree_id;
      const tree = await Tree.destroy({ where: { id } });

      if (!tree) {
        return response.status(404).json("Árvore não encontrada");
      }

      response.status(202).json("Árvore deletada");
    } catch (error) {
      response.status(400).send(error);
    }
  }
};
