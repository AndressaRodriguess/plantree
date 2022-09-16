const UserService = require("../services/UserService");
const utils = require("../utils/utils");
const User = require("../models/User");

module.exports ={
  async createUser(req, res){
    const user = await User(req.body);
    user.password = await utils.encryptPwd(req.body.password);
    user.createdAt = new Date();
    user.isAdmin = false;

    UserService.create(user, (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        user.password = "*******";
        res.status(201).json(user);
      }
    });
  },
  async getUser(req, res){
    const user = await UserService.getUserById(req.params.id);
    if(user){
      res.status(200).send(user);
    }else{
      res.status(404).send("Usuário não encontrado");
    }
  },
  async updateUser(req, res) {
    try {
      const userUpdate = await User(req.body);
      userUpdate.password = await utils.encryptPwd(req.body.password);
      userUpdate.updatedAt = new Date();
      userUpdate.isAdmin = false;

      const id = req.params.id;

      await UserService.updateUserById(userUpdate, id);

      res.status(201).json("Usuário atualizado com sucesso");
    } catch (error) {
      res.status(400).send(error);
    }
  },
  async removeUser(request,response){
    try {
      const id = request.params.id;
      await UserService.deleteUserById(id);

      response.status(202).json("Usuário desativado com sucesso");
    } catch (error) {
      return response.status(404).json("Usuário não encontrado");
    }
  }
}