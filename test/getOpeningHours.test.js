const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se caso não forneça parametro a função retorna objeto', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };

    expect(getOpeningHours()).toEqual(expected);
  });

  it('Verifica se Monday e 9AM retorna zoo fechado', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });

  it('Verifica se Tuesday e 9AM retorna zoo aberto', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });

  it('Verifica se entrar do data errada e 9AM retorna erro', () => {
    expect(() => { getOpeningHours('Thu', '09:00-AM'); }).toThrowError(new Error('The day must be valid. Example: Monday'));
  });

  it('Verifica se entrar do data certa e turno da hora errado retorna erro', () => {
    expect(() => { getOpeningHours('Friday', '09:00-ZM'); }).toThrowError(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });

  it('Verifica se entrardata certa e hora errada com letra na hora retorna erro', () => {
    expect(() => { getOpeningHours('Saturday', 'C09:00-AM'); }).toThrowError(new Error('The hour should represent a number'));
  });

  it('Verifica se entrar data certa e hora errada com letra no minuto  retorna erro', () => {
    expect(() => { getOpeningHours('Sunday', '09:c0-AM'); }).toThrowError(new Error('The minutes should represent a number'));
  });

  it('Verifica se entrar com data fora do horário normal retorna erro', () => {
    expect(() => { getOpeningHours('Monday', '13:00-AM'); }).toThrowError(new Error('The hour must be between 0 and 12'));
  });

  it('Verifica se entrar com horário fora do padrão retorna erro', () => {
    expect(() => { getOpeningHours('Tuesday', '09:60-AM'); }).toThrowError(new Error('The minutes must be between 0 and 59'));
  });
});
