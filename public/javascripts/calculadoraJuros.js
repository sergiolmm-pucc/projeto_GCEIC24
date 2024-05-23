
function calcularRendimento(a, b, c) {
    var resultado = a * Math.pow(1 + (b / 100), c);
    return parseFloat(resultado.toFixed(2));
}

module.exports = { calcularRendimento };