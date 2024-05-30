const {InvetimentoSeguro} = require('../public/javascripts/SDI')

describe('Teste SDI - Simulador de Investimento', () => {

    test('Funcao Simulador de Investimento Seguro', ()=>{
        expect(InvetimentoSeguro(10, 500, 6)).toBe(3.857,81);
    })

})