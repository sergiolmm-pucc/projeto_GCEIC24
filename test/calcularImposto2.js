function calcularImposto2(price, tax) {
    if (isNaN(price) || isNaN(tax)) {
      throw new Error('Os parâmetros devem ser números');
    }
    const imposto = (price * tax) / 100;
    const valorFinal = price + imposto;
    return {
      imposto,
      valorFinal
    };
  }
  
  module.exports = calcularImposto;
  