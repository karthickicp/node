const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title" /><button type="submit">Submit</button></form>'
  );
});
app.post("/product", (req, res, next) => {
  console.log(req.body, "request body");
  res.redirect("/");
});
app.use("/", (req, res, next) => {
  res.send("<h1>Hello From Express!</h1>");
});

app.listen(5000);
