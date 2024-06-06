// calculoEncargosEmpregador.test.js
const { calculoEncargosEmpregador } = require('../public/javascripts/etec');

test('calcula corretamente os encargos do empregador', () => {
    const salario_bruto = 1000;
    const resultadoEsperado = {
        inssEmpregador: 80.00,
        fgts: 80.00,
        seguroAcidenteTrabalho: 8.00,
        total: 168.00
    };

    const resultado = calculoEncargosEmpregador(salario_bruto);
    expect(resultado).toEqual(resultadoEsperado);
});

test('calcula corretamente os encargos do empregador com salário decimal', () => {
    const salario_bruto = 1234.56;
    const resultadoEsperado = {
        inssEmpregador: 98.76,
        fgts: 98.76,
        seguroAcidenteTrabalho: 9.88,
        total: 207.40
    };

    const resultado = calculoEncargosEmpregador(salario_bruto);
    expect(resultado).toEqual(resultadoEsperado);
});

test('calcula corretamente os encargos do empregador com salário zero', () => {
    const salario_bruto = 0;
    const resultadoEsperado = {
        inssEmpregador: 0.00,
        fgts: 0.00,
        seguroAcidenteTrabalho: 0.00,
        total: 0.00
    };

    const resultado = calculoEncargosEmpregador(salario_bruto);
    expect(resultado).toEqual(resultadoEsperado);
});
