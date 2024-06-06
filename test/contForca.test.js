const { calcularNovoPeso } = require('../public/javascripts/contForca')

describe('Teste Função Calcular Novo Peso', () => {

    test('65kg Remada Curvada Facil', ()=>{
        expect(calcularNovoPeso(65, 1.07, 1.05)).toBe(73);
    });

});
