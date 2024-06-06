const { calcularImposto } = require('../javascripts/ifsp');

describe('Teste calcularImposto', () => {

    test('Cálculo de imposto e preço final', () => {
        const resultado = calcularImposto(100, 20);
        expect(resultado.imposto).toBe('20.00');
        expect(resultado.precoFinal).toBe('120.00');
    });

    test('Valores inválidos devem lançar erro', () => {
        expect(() => calcularImposto('abc', 20)).toThrow('Valores inválidos. Por favor, insira valores numéricos.');
        expect(() => calcularImposto(100, 'xyz')).toThrow('Valores inválidos. Por favor, insira valores numéricos.');
    });

    test('Cálculo com zero', () => {
        const resultado = calcularImposto(0, 20);
        expect(resultado.imposto).toBe('0.00');
        expect(resultado.precoFinal).toBe('0.00');
    });

    test('Cálculo com valores negativos', () => {
        const resultado = calcularImposto(-100, 20);
        expect(resultado.imposto).toBe('-20.00');
        expect(resultado.precoFinal).toBe('-120.00');
    });

});