const { calcularTMBHomem } = require("../public/javascripts/tmb");

const { calcularFatorAtividade } = require("../public/javascripts/tmb")

const { calcularTMBMulher } = require("../public/javascripts/tmb")

describe("Testes de calculo de TMB", () => {
    test('calculo de TMB para homem de 20 anos, 100 kgs e 180 cm', () => {

        const tmbhomem = calcularTMBHomem(100, 180, 20);
        const fator = calcularFatorAtividade("sedentario");

        const taxa = fator*tmbhomem
        expect(taxa).toBe(2640)
    });

    test('calculo de TMB para mulher de 17 anos, 100 kgs e 165 cm', () => {

        const tmbhomem = calcularTMBMulher(100, 165, 17);
        const fator = calcularFatorAtividade("sedentario");

        const taxa = fator*tmbhomem
        expect(taxa).toBe(2198.52)
    });
});
