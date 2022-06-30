const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  const quantity = {};
  if (!animal) {
    species.forEach((element) => {
      quantity[element.name] = element.residents.length;
    });
    return quantity;
  }
  if (!animal.sex) {
    const numeroSpecie = species.find((specie) => specie.name === animal.specie);
    return numeroSpecie.residents.length;
  }
  const numeroSpecie = species.find((specie) => specie.name === animal.specie);
  const numeroSpecieSe = numeroSpecie.residents.filter((sexWished) => sexWished.sex === animal.sex);
  return numeroSpecieSe.length;
}
console.log(countAnimals({ specie: 'elephants', sex: 'male' }));
module.exports = countAnimals;
