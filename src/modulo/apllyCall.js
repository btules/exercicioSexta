const ExercicioThis = {
  nome: 'Fulano',
  idade: 12
}

function callAtrr(){
  return `Meu nome é ${this.nome} e tenho ${this.idade} anos`
}

function apllAtrr(nome, idade){
  return `Meu nome é ${this.nome} e tenho ${this.idade} anos`
}




module.exports = {
  callThis: callAtrr.call(ExercicioThis),
  apllThis: apllAtrr.apply(ExercicioThis)
};