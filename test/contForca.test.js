
const { calcularNovoPeso } = require('../public/javascripts/contForca');

global.document = {
  getElementById: jest.fn().mockImplementation((id) => {
    return {
      addEventListener: jest.fn(),
      value: '100',
      innerText: ''
    };
  })
};

describe('calcularNovoPeso', () => {
    test('65kg Remada Curvada Fácil', () => {
        expect(calcularNovoPeso(65, 1.07, 1.05)).toBe(73);
    });
});
