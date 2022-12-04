const trees_planted = require("express").Router();
const { verifyJWT } = require("../api/middleware/AuthenticationMiddleware");
const TreePlanted = require("../api/repositories/database/model/TreePlanted");

trees_planted.get("/trees_planted", verifyJWT, async function (req, res) {
    try {
        const user_id = req.user_id;
        const tree_planted = await TreePlanted.findAll({ where: { user_id } });
        res.status(200).json(tree_planted);
      } catch (error) {
        res.status(400).send(error);
    }
});

trees_planted.get("/trees_planted/:id", verifyJWT, async function (req, res) {
    try {
        const id = req.params.id;
        const tree_planted = await TreePlanted.findOne({ where: { id } });
        if (!tree_planted) return res.status(404).json("Árvore não encontrada");
        res.status(200).json(tree_planted);
    } catch (error) {
        res.status(400).send(error);
    }
});

trees_planted.post("/trees_planted", verifyJWT, async function (req, res) {
    try {
        const tree = {
            ...req.body,
            user_id: req.user_id
        }
        const tree_planted = await TreePlanted.create(tree);
        res.status(201).json(tree_planted);
    } catch (error) {
        res.status(400).send(error);
    }
});

trees_planted.put("/trees_planted/:id", verifyJWT, async function (req, res) {
    try {
        const { name, description, date, local_id } = req.body;
        const id = req.params.id;
        const tree = await TreePlanted.findOne({ where: { id } });
        if (!tree) {
          return res.status(404).json("Árvore plantada não encontrada");
        }
        tree.name = name;
        tree.description = description;
        tree.date = date;
        tree.user_id = req.user_id;
        tree.local_id = local_id;
        await tree.save();
        res.status(200).json("Árvore plantada atualizada com sucesso");
    } catch (error) {
        res.status(400).send(error);
    }
});

trees_planted.delete("/trees_planted/:id", verifyJWT, async function (req, res) {
    try {
        const id = req.params.id;
        const tree_planted = await TreePlanted.destroy({ where: { id } });
        if (!tree_planted) return res.status(404).json("Árvore não encontrada");
        res.status(202).json("Árvore deletada");
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = trees_planted;