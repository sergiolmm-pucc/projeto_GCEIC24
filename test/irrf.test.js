const { calculoIRRF } = require("../public/javascripts/irrf");

describe("Teste exemplo IRRF", () => {
  test("Função calcularIRRF", () => {
    expect(calculoIRRF(3000).toBe([47.19, 258.82]));
    expect(calculoIRRF(5000).toBe([356.54, 518.82]));
  });
});
