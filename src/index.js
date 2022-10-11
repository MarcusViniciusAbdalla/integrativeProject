const { response } = require('express');
const { request } = require('express');
const express = require('express');

const app = express();

/* GET - Buscar uma informação dentro do servidor
   POST - Inserir uma informação no servidor
   PUT - Alterar uma informação no servidor
   PATCH - Alterar uma informação específica
   DELETE - Deletar uma informação no servidor
*/

app.get("/courses", (request , response) => {
  return response.json(["Curso 1" , "Curso 2 " , "Curso 3"])
});

app.post("/courses", (request , response) => {
  return response.json(["Curso 1" , "Curso 2 " , "Curso 3" , "Curso 4"])
});

app.listen(3333);