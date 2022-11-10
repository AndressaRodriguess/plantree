const app = require("./app.js");
const sequelize = require("./src/api/repositories/database/database");
require("dotenv").config();

sequelize.sync();

const port = process.env.SERVER_PORT || 8080;

app.listen(port, () =>{
    console.log(`Server listening on port ${port}`);
});