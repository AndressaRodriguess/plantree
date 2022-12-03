const trees = require("express").Router();
const { verifyJWT } = require("../api/middleware/AuthenticationMiddleware");
const Tree = require("../api/repositories/database/model/Tree");

trees.get("/trees", verifyJWT, async function (req, res) {
    try {
        const trees = await Tree.findAll();
        res.status(200).json(trees);
    } catch (error) {
        res.status(400).send(error);
    }
});
trees.get("/trees/:tree_id", verifyJWT, async function (req, res) {
    try {
        const id = req.params.tree_id;
        const tree = await Tree.findOne({ where: { id } });
        if (!tree) {
          return res.status(404).json("Árvore não encontrada");
        }
        res.status(200).json(tree);
    } catch (error) {
        res.status(400).send(error);
    }
});
trees.post("/trees", verifyJWT, async function (req, res) {
    try {
        const tree = await Tree.create(req.body);
        res.status(201).json(tree);
    } catch (error) {
        res.status(400).send(error);
    }
});
trees.delete("/trees/:tree_id", verifyJWT, async function (req, res) {
    try {
        const id = req.params.tree_id;
        const tree = await Tree.destroy({ where: { id } });
        if (!tree) return res.status(404).json("Árvore não encontrada");
        res.status(202).json("Árvore deletada");
    } catch (error) {
        res.status(400).send(error);
    }
});

/*
   tree.put("/trees/:tree_id", verifyJWT, async function (request, response) {
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
    });
*/

module.exports = trees;