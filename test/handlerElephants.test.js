const handlerElephants = require('../src/handlerElephants');

describe('6 - Implemente os testes da função handlerElephants para obter ao menos 80% de cobertura',
  it('Verificar se retorna quantidade certa de elefantes', () => {  
    const expected = [{
      id: elephantsId,
      name: 'elephants',
      popularity: 5,
      location: 'NW',
      availability: ['Friday', 'Saturday', 'Sunday', 'Tuesday'],
      residents: [
        { name: 'Ilana', sex: 'female', age: 11 },
        { name: 'Orval', sex: 'male', age: 15 },
        { name: 'Bea', sex: 'female', age: 12 },
        { name: 'Jefferson', sex: 'male', age: 4 },
      ],
    },];

    expect(getElephants).toBe(expected);
  }));
