const data = require('../data/zoo_data');

const { employees } = data;
function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  const employeeFounded = employees.find((employee) =>
    employee.firstName === employeeName
     || employee.lastName === employeeName);
  return employeeFounded;
}

module.exports = getEmployeeByName;
