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

  it('Verifica se averageAge retorna 10.5', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });

  it('Verifica se botando algo não esperado retorna null', () => {
    expect(handlerElephants('AAA')).toBe(null);
  });

  it('Verifica se botando algo não esperado retorna string de invalidez', () => {
    expect(handlerElephants(10)).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('Verifica se popularity retorna 5', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
});
