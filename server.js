const cors = require("cors");
const express = require("express");
const app = express();

global.__basedir = __dirname;

var corsOptions = {
  // origin: "http://localhost:8081"
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

const initRoutes = require("./src/routes");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

let port = 8080;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
