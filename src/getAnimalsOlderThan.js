const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species.find((nameInput) => nameInput.name === animal);
}
console.log(getAnimalsOlderThan('lion'));
module.exports = getAnimalsOlderThan;
