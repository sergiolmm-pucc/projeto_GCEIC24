const { calcularTMBHomem } = require("../public/javascripts/tmb");

const { calcularFatorAtividade } = require("../public/javascripts/tmb")

describe("Teste calculo de TMB", () => {
    test('calculo de TMB para homem de 20 anos, 100 kgs e 180 cm', () => {

        const tmbhomem = calcularTMBHomem(100, 180, 20);
        const fator = calcularFatorAtividade("sedentario");

        const taxa = fator*tmbhomem
        expect(taxa).toBe(2640)
    });

});
