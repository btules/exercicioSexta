let update = [];

for(let i = 0; i < 2; i++){
  update.push(function() {return i})
}

module.exports = update;