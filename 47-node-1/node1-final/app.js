const express = require("express");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");
const { request } = require("http");

// express app sukūrimas
const app = express();

// mongo db jungtis
const dbURI ="mongodb+srv://mantanavicius:PwvHP9zq42gGXaKE@cluster0.iisjwpx.mongodb.net/node1";

mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// registruojame view engine
app.set("view engine", "ejs");

// statiškų failų pateikimui iš root aplanko:
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));

// views
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/apie", (req, res) => {
  res.render("apie", { title: "Apie mane" });
});

// blog routes
app.use(blogRoutes);

// 404 - use() middleware
app.use((req, res) => {
  res.status(404).render("404", { title: "Puslapis nerastas" });
});
