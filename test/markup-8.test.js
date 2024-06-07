const { calcularMarkup } = require('../public/javascripts/calculoMarkup-8.js');

test('calcularMarkup deve retornar o valor correto com um markup de 20%', () => {
  const valorBase = 100;
  const percentualMarkup = 20;
  const resultadoEsperado = 120; 
  const resultado = calcularMarkup(valorBase, percentualMarkup);
  expect(resultado).toBe(resultadoEsperado);
});

test('calcularMarkup deve retornar o valor correto com um markup de 50%', () => {
  const valorBase = 200;
  const percentualMarkup = 50;
  const resultadoEsperado = 300; 
  const resultado = calcularMarkup(valorBase, percentualMarkup);
  expect(resultado).toBe(resultadoEsperado);
});

test('calcularMarkup deve retornar o valor correto com um markup de 0%', () => {
  const valorBase = 150;
  const percentualMarkup = 0;
  const resultadoEsperado = 150;
  const resultado = calcularMarkup(valorBase, percentualMarkup);
  expect(resultado).toBe(resultadoEsperado);
});

test('calcularMarkup deve lançar um erro se o valor base for negativo', () => {
  const valorBase = -100;
  const percentualMarkup = 20;
  expect(() => {
    calcularMarkup(valorBase, percentualMarkup);
  }).toThrow('Valor base não pode ser negativo');
});

test('calcularMarkup deve lançar um erro se o percentual de markup for negativo', () => {
  const valorBase = 100;
  const percentualMarkup = -20;
  expect(() => {
    calcularMarkup(valorBase, percentualMarkup);
  }).toThrow('Percentual de markup não pode ser negativo');
});
