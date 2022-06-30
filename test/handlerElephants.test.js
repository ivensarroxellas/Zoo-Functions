const handlerElephants = require('../src/handlerElephants');

describe('6, 7 e 15- Implemente os testes da função handlerElephants para obter ao menos 80%, 90% e 100% de cobertura', () => {
  it('Verifica se caso não forneça parametro a função retorna indefinida', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('Verifica se count retorna 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('Verifica se names retorna Jefferson', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });

  it('Verifica se names retorna Jefferson', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
});
