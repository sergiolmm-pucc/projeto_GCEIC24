const { tmb } = require("../public/javascripts/tmb");


describe("Teste calculo de TMB", () => {
    let calculoTMB;

    beforeEach(() => {
        calculoTMB = new tmb();
    });

    test('calculo de TMB para homem de 20 anos, 100 kgs e 180 cm', () => {

        const calularTMBHomem = calculoTMB.calcularTMBHomem(100, 180, 20);

        const fatorAtividade = calculoTMB.calcularFatorAtividade("sedentario")

        const taxa = calularTMBHomem*fatorAtividade

        expect(taxa).toEqual(2640)
    });

    test('calculo de TMB para mulher de 20 anos, 100 kgs e 180 cm', () => {

        const calularTMBHomem = calculoTMB.calcularTMBMulher(100, 180, 20);

        const fatorAtividade = calculoTMB.calcularFatorAtividade("sedentario")

        const taxa = calularTMBHomem*fatorAtividade

        expect(taxa).toEqual(2214)
    });


});
