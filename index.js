require("dotenv").config();
const express = require("express");
const { PORT } = process.env;
const app = express();

app.listen(() => {
  console.log("Server Started ! and listening at port ", PORT);
}, PORT);
