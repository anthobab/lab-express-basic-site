const express = require("express");
const hbs = require("hbs");

const app = express();

app.use(express.static(__dirname + "/public"));
// app.set("views", __dirname + "/pages")

app.set("view engine", "hbs");

app.get("/", (request, response) => {
  response.render("home", {
    title: "Home page",
    style: ["style.css", "font-style.css"],
  });
});

app.get("/works", (request, response) => {
  response.render("works", {
    title: "Works page",
    style: ["style.css", "font-style.css"],
  });
});
app.get("/about", (request, response) => {
  response.render("about", {
    title: "About page",
    style: ["style.css", "font-style.css"],
  });
});
app.get("/photoGallery", (request, response) => {
  response.render("photoGallery", {
    title: "Photo Gallery page",
    style: ["style.css", "font-style.css"],
  });
});

app.listen(3000, () => console.log(`Server 🏃‍♂️ on localhost:3000`));
