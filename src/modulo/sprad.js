var preco = [12, 25, 4];
var maiorPreco = Math.max(...preco);

//String

var valor = '69870'
var maiorValor = Math.max(...valor);

//array dentro do array

var partes = ['ombro ', 'joelho '];
var letra = ['cabeca ', ...partes, 'pé'];

module.exports = {maiorPreco, maiorValor, letra}