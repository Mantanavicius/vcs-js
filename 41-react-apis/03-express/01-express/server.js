const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    message: "Hello World! from express",
    date: new Date(),
  });
});

app.get("/about", (req, res) => {
  res.send({ title: "About us" });
});

app.get("/contact", (req, res) => {
  res.send({
    title: "Contact us",
    phone: "+37000000000",
    email: "kDnZ4@example.com",
  });
});

app.get("/posts", (req, res) => {
  res.send({ message: "All posts" });
});

app.get("/posts/:id/", (req, res) => {
  res.send({ message: `Post with id ${req.params.id}` });
});

app.post("/posts", (req, res) => {
  res.send({ message: "Post created", data_reveived: req.body });
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
