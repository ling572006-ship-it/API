const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application."});
});

require("./app/routes/product.route.js")(app);
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});

// const express = require('express');
// const app = express();
// app.use(express.json());

// const productRoutes = require('./app/routes/product.route');
// productRoutes(app);

// app.listen(3000, () => console.log("Server running"));