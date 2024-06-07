const { calcularArea } = require("../public/javascripts/geomcalc");

describe("Teste GeomCalc", () => {
  test("Calcular a área de um quadrado", () => {
    const forma = "quadrado";
    const valores = { lado: 4 };
    const resultado = calcularArea(forma, valores);
    expect(resultado).toBe(16);
  });

  test("Calcular a área de um círculo", () => {
    const forma = "circulo";
    const valores = { raio: 3 };
    const resultado = calcularArea(forma, valores);
    expect(resultado).toBeCloseTo(Math.PI * 3 * 3);
  });

  test("Calcular a área de um retângulo", () => {
    const forma = "retangulo";
    const valores = { largura: 4, altura: 5 };
    const resultado = calcularArea(forma, valores);
    expect(resultado).toBe(20);
  });

  test("Calcular a área de um pentágono", () => {
    const forma = "pentagono";
    const valores = { lado: 4 };
    const resultado = calcularArea(forma, valores);
    const expected = (5 / 4) * Math.pow(4, 2) * (1 / Math.tan(Math.PI / 5));
    expect(resultado).toBeCloseTo(expected);
  });

  test("Calcular a área de um losango", () => {
    const forma = "losango";
    const valores = { diagonal1: 5, diagonal2: 6 };
    const resultado = calcularArea(forma, valores);
    expect(resultado).toBe(15);
  });

  test("Calcular a área de um hexágono", () => {
    const forma = "hexagono";
    const valores = { lado: 3 };
    const resultado = calcularArea(forma, valores);
    const expected = ((3 * Math.sqrt(3)) / 2) * Math.pow(3, 2);
    expect(resultado).toBeCloseTo(expected);
  });

  test("Calcular a área de um trapézio", () => {
    const forma = "trapezio";
    const valores = { baseMaior: 7, baseMenor: 5, altura: 4 };
    const resultado = calcularArea(forma, valores);
    expect(resultado).toBe(24);
  });
});
