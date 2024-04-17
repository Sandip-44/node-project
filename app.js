const http = require("http");
const express = require("express");
const expressHbs = require("express-handlebars");

const path = require("path");

const adminRoutes = require("./routes/admin");

const shopRoutes = require("./routes/shop");

const pageNotFound = require("./controllers/error");

const bodyParser = require("body-parser");

const app = express();

app.engine(
  "hbs",
  expressHbs({
    layoutsDir: "views/layouts/",
    defaultLayout: "main-layout",
    extname: "hbs",
  })
);
app.set("view engine", "hbs");

// app.set("view engine", "pug");

// app.set("views", "views"); //if your file name is views don't need this is a default

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(pageNotFound.pageNotFound);

const server = http.createServer(app);

server.listen(3000);
