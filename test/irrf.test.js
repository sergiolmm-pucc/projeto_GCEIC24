const { calcularIRRF } = require("../public/javascripts/irrf");

describe("Teste exemplo IRRF", () => {
  test("Função calcularIRRF", () => {
    expect(calcularIRRF(3000).toBe([47.19, 258.82]));
    expect(calcularIRRF(5000).toBe([356.54, 518.82]));
  });
});
