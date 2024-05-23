const {calcularRendimento} = require('../public/javascripts/calculadora');

describe('Teste execução calculadora', () => {

    test('Funcao calcularRendimento', ()=>{
        expect(calcularRendimento(500,5,12)).toBe(897.93);
    })

})