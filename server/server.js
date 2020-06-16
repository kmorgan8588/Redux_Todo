const express = require("express");
const path = require("path");
const { module } = require("../webpack.config");

const app = express();

app.use(express.static(path.resolve(__dirname, "public")));

module.exports = app;
