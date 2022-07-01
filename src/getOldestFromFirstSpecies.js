const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const test = [];
  const employeeFound = employees.find((employee) => employee.id === id);
  const animal = employeeFound.responsibleFor[0];
  const specieWished = species.find((specie) => specie.id === animal);
  const specieResidentesWished = specieWished.residents;
  const oldestAnimal = specieResidentesWished.sort((a, b) => (a.age < b.age ? 1 : -1))[0];
  test.push(oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age);
  return test;
}
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
