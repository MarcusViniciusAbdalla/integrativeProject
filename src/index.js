const { request } = require("express");
const express = require("express");
const { v4 } = require("uuid");

const app = express();

app.post("/account", (request , response) => {
  const {cpf , name } = request.body;
});

app.listen(3333);