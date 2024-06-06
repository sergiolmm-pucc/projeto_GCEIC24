const { contabilidadeForca } = require('../public/javascripts/contForca')

describe('Teste Função Contabilidade de Força', () => {

    test('65kg Remada Curvada Facil', ()=>{
        expect(contabilidadeForca(65, 1.07, 1.05)).toBe(73);
    })

})