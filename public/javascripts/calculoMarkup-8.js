// calculoMarkup.js

function calcularMarkup(valorBase, percentualMarkup) {
  if (valorBase < 0) {
      throw new Error('Valor base não pode ser negativo');
  }
  if (percentualMarkup < 0) {
      throw new Error('Percentual de markup não pode ser negativo');
  }
  return valorBase + (valorBase * percentualMarkup / 100);
}

module.exports = { calcularMarkup };
