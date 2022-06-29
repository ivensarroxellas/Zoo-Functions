const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animalWished = species.find((specie) => specie.name === animal);
  return animalWished.residents.every((ageCheck) => ageCheck.age >= age);
}

module.exports = getAnimalsOlderThan;
