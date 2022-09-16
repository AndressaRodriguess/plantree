const app = require("./app.js");
require("dotenv").config();
const dbo = require("./src/db/conn");

const port = process.env.SERVER_PORT || 8080;

// perform a database connection when the server starts
dbo.connectToServer(function (err) {
    if (err) {
      console.error(err);
      process.exit();
    }
  
    // start the Express server
    app.listen(port, () =>{
        console.log(`Server listening on port ${port}`);
    });
  });
