const { arredondaDuasCasas, calculoINSS, calculoIRRF, calculoEncargosEmpregador } = require("../public/javascripts/etec");
test('arredondaDuasCasas deve arredondar o número para duas casas decimais', () => {
    expect(arredondaDuasCasas(123.456)).toBe(123.46);
    expect(arredondaDuasCasas(123.451)).toBe(123.45);
    expect(arredondaDuasCasas(0.1 + 0.2)).toBe(0.3); // testando problemas comuns com ponto flutuante
});

test('calculoINSS deve calcular o valor correto do INSS', () => {
    expect(calculoINSS(1000)).toBe(75.00);
    expect(calculoINSS(1500)).toBe(112.65);
    expect(calculoINSS(3000)).toBe(258.85);
    expect(calculoINSS(5000)).toBe(650.34);
});

test('calculoIRRF deve calcular o valor correto do IRRF e do INSS', () => {
    expect(calculoIRRF(2000)).toEqual([0, 150.00]);
    expect(calculoIRRF(2500)).toEqual([27.36, 197.65]);
    expect(calculoIRRF(3500)).toEqual([102.96, 258.85]);
    expect(calculoIRRF(4500)).toEqual([267.63, 378.82]);
    expect(calculoIRRF(6000)).toEqual([517.67, 650.34]);
});

test('calculoEncargosEmpregador deve calcular os encargos corretamente', () => {
    expect(calculoEncargosEmpregador(2000)).toEqual({
        inssEmpregador: 160.00,
        fgts: 160.00,
        seguroAcidenteTrabalho: 16.00,
        total: 336.00
    });
    expect(calculoEncargosEmpregador(3000)).toEqual({
        inssEmpregador: 240.00,
        fgts: 240.00,
        seguroAcidenteTrabalho: 24.00,
        total: 504.00
    });
    expect(calculoEncargosEmpregador(4000)).toEqual({
        inssEmpregador: 320.00,
        fgts: 320.00,
        seguroAcidenteTrabalho: 32.00,
        total: 672.00
    });
});

