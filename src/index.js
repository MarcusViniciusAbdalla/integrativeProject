const { response } = require('express');
const { request } = require('express');
const express = require('express');

const app = express();

app.get("/", (request , response) => {
  return response.json({message: "Hello World! Node.js "})
});

app.listen(3333);