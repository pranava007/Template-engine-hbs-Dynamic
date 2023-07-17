const express = require("express");
const app = express();
const path = require("path");
const home = require("./routers/home");
const service = require("./routers/servies");
const error = require("./routers/error");
const { engine } = require("express-handlebars");
app.use(express.static(path.join(__dirname, "public")));

app.engine("hbs", engine({ extname: ".hbs", defaultLayout: 'main' }));

app.set("view engine", "hbs");



app.use(home);
app.use(service);

// error code
app.use(error);
app.listen(3030);
