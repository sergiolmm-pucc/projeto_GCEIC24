const { calcularImposto } = require('../routes/ifspRoute');

describe('Teste de cálculo de imposto', () => {
    test('Calcula imposto corretamente', () => {
        // Dados de exemplo
        const price = '100';
        const tax = '10';
        // Chama a função de cálculo de imposto
        const result = calcularImposto(price, tax);
        // Verifica se o resultado é o esperado
        expect(result.imposto).toBe('10.00');
        expect(result.valorFinal).toBe('110.00');
    });
});