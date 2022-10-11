const { request } = require("express");
const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());

const custumers = [];

app.post("/account", (request , response) => {
  const {cpf , name } = request.body;

  const custumerAlreadyExists = custumers.some(
    (custumer) => custumer.cpf === cpf);

  if(custumerAlreadyExists) {
    return response.status(400).json({error: "Custumer already exists"});
  };

  
  custumers.push({
    cpf,
    name,
    id: uuidv4(),
    statement:[]
  });

  return response.status(201).send();

});

app.get("/statement/:cpf", (request, response) => {
  const {cpf} = request.params;

  const custumer = custumers.find(custumer => custumer.cpf === cpf);

  if(!custumer){
    return response.status(400).json({ error: "Custumer not found"});
  }

  return response.json(custumer.statement);
});

app.listen(3333);