const path = require('path');
const calcularImposto = require(path.resolve(__dirname, '../public/javascripts/calcularImposto'));

describe('Função calcularImposto', () => {
  it('deve calcular o imposto e o valor final corretamente', () => {
    const resultado = calcularImposto(100, 10);
    expect(resultado.imposto).toBe(10);
    expect(resultado.valorFinal).toBe(110);
  });

  it('deve retornar 0 de imposto e valor final igual ao preço quando a alíquota é 0', () => {
    const resultado = calcularImposto(100, 0);
    expect(resultado.imposto).toBe(0);
    expect(resultado.valorFinal).toBe(100);
  });

  it('deve lançar um erro se os parâmetros não forem números', () => {
    expect(() => calcularImposto('abc', 10)).toThrow();
    expect(() => calcularImposto(100, 'def')).toThrow();
  });
});
