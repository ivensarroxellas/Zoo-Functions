const data = require('../data/zoo_data');
const { price } = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const faixa = { adult: 0, child: 0, senior: 0 };
  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      faixa.child += 1;
    }
    if (entrant.age >= 18 && entrant.age < 50) {
      faixa.adult += 1;
    }
    if (entrant.age >= 50) {
      faixa.senior += 1;
    }
  });
  return faixa;
}
function calculateEntry(entrants) {
  // seu código aqui.
  if (!entrants || !Object.values(entrants).length) {
    return 0;
  }
  const faixa = countEntrants(entrants);
  const valorChild = faixa.child;
  const valorAdult = faixa.adult;
  const valorSenior = faixa.senior;
  return (valorChild * 20.99 + valorAdult * 49.99 + valorSenior * 24.99);
}
module.exports = { calculateEntry, countEntrants };
