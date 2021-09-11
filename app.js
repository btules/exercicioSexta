const express = require('express');
const app = express();
const teste = require('./src/modulo/teste');
const variaveis = require('./src/modulo/variaveis');
const update = require('./src/modulo/update');
const dividir = require('./src/modulo/calcDividir');
const dividir2 = require('./src/modulo/calcDividir2');
const Exrest = require('./src/modulo/rest');
const Exspred = require('./src/modulo/sprad');
const produto = require('./src/modulo/literalObject');
const tarefa = require('./src/modulo/tarefa');
const callApll = require('./src/modulo/apllyCall');


app.get('/', (req, res) => {
  res.send(`
  <h1> Exercícios Javascript</h1>
  <hr>
  <p>number: ${teste} </p>
  <hr>
  <p>Var1: ${variaveis.var1} <br /> Var2: ${variaveis.var2} <br /> Var3: ${variaveis.var3}</p>
  <hr>
  <p>Valor do array[0]: ${update[0]()} <br /> Valor array[1]: ${update[1]()}</p>
  <hr>
  <p>O resultado é: ${dividir(2,2)} </p>
  <hr>
  <p>O resultado é: ${dividir2(10,3)} </p>
  <hr>
  <p> Soma é ${Exrest(6, 2, 10, 11)}</p>
  <hr>
  <p> O maior preço é: ${Exspred.maiorPreco}</p>
  <hr>
  <p> O maior valor é: ${Exspred.maiorValor}</p>
  <hr>
  <p> A letra da musica é: ${Exspred.letra}</p>
  <hr>
  <p> O valor total do produto é: ${produto.calculaTotal().toFixed(2)}</p>
  <hr>
  <p> Id tarefa: ${tarefa.mostraId()} </p>
  <hr>
  <h2> Utilização de Call e Aplly para exemplificar o contexto em que se aplica o This </h2>
  <p> Junção do Objeto e função </p>
  
  <p> Call: ${callApll.callThis} </p>
  <p> Aplly: ${callApll.apllThis} </p>

  `);
});

app.listen(3000, ()=>{
  console.log("Certo");
});