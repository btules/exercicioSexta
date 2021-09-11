//Objeto produto

var produto = {
  preco: 5.98,
  quantidade:10,
  calculaTotal(){
    return this.preco * this.quantidade;
  }
}


//campo dinamico

var campo = "campoDinamico"
var produto = {
  [campo]: 58888,
  preco: 5.98,
  quantidade: 10,
  calculaTotal(){
    return this.preco * this.quantidade;
  }
}

module.exports = produto;