const http = require("http");
const express = require("express");
const expressHbs = require("express-handlebars");

const path = require("path");

const adminData = require("./routes/admin");

const shopRoutes = require("./routes/shop");

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

// app.set("views", "views"); //if your file name is views dont need this is a defualt

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  //   res.status(404).send("<h1>Page Not Found</h1>");
  res
    .status(404)
    // .sendFile(path.join(__dirname, "views", "page-not-found.html"));
    .render("404", { pageTitle: "Page Not Found" });
});

const server = http.createServer(app);

server.listen(3000);
