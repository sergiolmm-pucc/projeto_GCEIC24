const { calculoIRRF } = require("../public/javascripts/irrf");

describe("Teste IRRF - Imposto de Renda Retido na Fonte", () => {
  test("Função calcularIRRF", () => {
    expect(calculoIRRF(3000)).toEqual([47.19, 258.82]);
    expect(calculoIRRF(5000)).toEqual([356.54, 518.82]);
  });
});
