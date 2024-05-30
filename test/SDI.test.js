const { InvestimentoSeguro } = require('../public/javascripts/SDI')

describe('Teste SDI - Simulador de Investimento', () => {

    test('Funcao Simulador de Investimento Seguro', ()=>{
        expect(InvestimentoSeguro(10, 500, 6)).toBe(3857.81);
    })

})