const auth = require("express").Router();
const User = require("../api/repositories/database/model/User");
const utils = require("../api/utils/utils");

auth.post("/auth/login", async function (req, res) {
    try{
        if (req.body.hasOwnProperty('email') && req.body.hasOwnProperty('password')  ) {
            const userLogin = await User.findOne({ where: { email: req.body.email } });
            if(!userLogin) throw new Error();
            const authenticated = await utils.comparePwd(req.body.password, userLogin.password);
            if(!authenticated) throw new Error();

            const token = utils.signJwt(userLogin.id);
            res.set('Authorization', `Bearer ${token}`);
            userLogin.password = "*******";
            res.status(200).json({
                user: userLogin,
                token: token
            });
        } else {
            res.status(400).send("Objeto de requisição deve conter um atributo email e password");
        }
    }catch{
        res.status(400).send("Senha e/ou usuário incorretos");
    }
});

auth.post("/auth/register", async function (req, res) {
    try {
        const user = {
            name: req.body.name,
            email: req.body.email
        };
        user.password = await utils.encryptPwd(req.body.password);
        const email_exist = await User.findOne({ where: { email: user.email } });
        if(!email_exist){
            const new_user = await User.create(user);
            new_user.password = "*******";
            res.status(201).json(new_user);
        }
        else
        {
          res.status(409).json("Cadastro não foi realizado pois e-mail já está em uso.");
        }
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = auth;