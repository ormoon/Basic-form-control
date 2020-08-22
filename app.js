const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const exphbs  = require('express-handlebars');
const PORT = 3000;

const databaseConnection = require("./shared/connection");

const app = express();
const server = http.createServer(app);

app.use(express.static('public'));


app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

var indexRouter = require("./routes/index");

app.use("/", indexRouter);

server.listen(PORT, "localhost", () => {
  console.log("Server started at port " + PORT);
});
