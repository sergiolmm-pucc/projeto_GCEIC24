// public/javascripts/geomcalc.js
function calcularArea(forma, valores) {
  let area;

  if (forma === "quadrado") {
    const lado = valores.lado;
    area = lado * lado;
  } else if (forma === "circulo") {
    const raio = valores.raio;
    area = Math.PI * raio * raio;
  } else if (forma === "retangulo") {
    const largura = valores.largura;
    const altura = valores.altura;
    area = largura * altura;
  } else if (forma === "pentagono") {
    const lado = valores.lado;
    area = (5 / 4) * Math.pow(lado, 2) * (1 / Math.tan(Math.PI / 5));
  } else if (forma === "losango") {
    const diagonal1 = valores.diagonal1;
    const diagonal2 = valores.diagonal2;
    area = (diagonal1 * diagonal2) / 2;
  } else if (forma === "hexagono") {
    const lado = valores.lado;
    area = ((3 * Math.sqrt(3)) / 2) * Math.pow(lado, 2);
  } else if (forma === "trapezio") {
    const baseMaior = valores.baseMaior;
    const baseMenor = valores.baseMenor;
    const altura = valores.altura;
    area = ((baseMaior + baseMenor) * altura) / 2;
  }

  return area;
}

module.exports = { calcularArea };
