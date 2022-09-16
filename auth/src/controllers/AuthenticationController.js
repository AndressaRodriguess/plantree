const UserService = require("../services/UserService");
const utils = require("../utils/utils");

module.exports = {
	async doLogin(req, res) {
		try{
			if (req.body.hasOwnProperty('email') && req.body.hasOwnProperty('password')  ) {
				const userLogin = await UserService.getByEmail(req.body.email);
				
				if(!userLogin){
					throw new Error();
				}

				const authenticated = await utils.comparePwd(req.body.password, userLogin.password);
			
				if(!authenticated){
					throw new Error();
				}

				const token = utils.signJwt(userLogin._id);
				res.set('Authorization', `Bearer ${token}`);
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
	},

	doLogout(req, res) {
		res.set('Authorization', `Bearer `);
		res.status(200).send();
	},
}