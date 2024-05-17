function calcularMarkup(custo, percentual) {
  // Calcular o markup
  return custo * (1 + percentual / 100);
}

// Verificar se o objeto window existe
if (typeof window !== 'undefined') {
  // Se existir, anexar a função calcularMarkup a ele
  window.calcularMarkup = calcularMarkup;
}

// Verificar se o objeto module existe
if (typeof module !== 'undefined') {
  // Se existir, exportar a função calcularMarkup
  module.exports = calcularMarkup;
}