const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function findEmployee(param) {
  const employeeC = employees.find((employee) => employee.firstName === param.name
  || employee.lastName === param.name
  || employee.id === param.id);
  if (employeeC !== undefined) {
    return employeeC;
  }
  throw new Error('Informações inválidas');
}

function getAnimais(param) {
  const arrayObjetoAnimal = [];
  const objeto = { locations: [], species: [] };
  param.responsibleFor.forEach((id) => {
    arrayObjetoAnimal.push(species.find((specie) => specie.id === id));
  });
  arrayObjetoAnimal.forEach((animal) => {
    objeto.locations.push(animal.location);
    objeto.species.push(animal.name);
  });

  return objeto;
}

function gerarDados(param) {
  const objAnimais = getAnimais(param);
  const result = {
    id: param.id,
    fullName: `${param.firstName} ${param.lastName}`,
    species: objAnimais.species,
    locations: objAnimais.locations,
  };
  return result;
}

function getEmployeesCoverage(param) {
  if (!param) {
    const todos = [];
    employees.forEach((item) => {
      todos.push(gerarDados(item));
    });
    return todos;
  }
  return gerarDados(findEmployee(param));
}

module.exports = getEmployeesCoverage;
