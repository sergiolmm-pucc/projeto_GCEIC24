/**
 *
 * @param numero
 * @returns
 */
function arredondaDuasCasas(numero) {
    return Number(numero.toFixed(2));
}

/**
 *
 * @param salario_bruto
 * @returns
 */
function calculoINSS(salario_bruto) {
    if (salario_bruto <= 1412) {
        return arredondaDuasCasas(0.075 * salario_bruto);
    }
    if (salario_bruto <= 2666.68) {
        return arredondaDuasCasas(0.09 * (salario_bruto - 1412) + 105.9);
    }
    if (salario_bruto <= 4000.03) {
        return arredondaDuasCasas(0.12 * (salario_bruto - 2666.68) + 218.82);
    }
    return arredondaDuasCasas(0.14 * (salario_bruto - 4000.03) + 378.822);
}

/**
 *
 * @param salario_bruto
 * @param inss
 * @returns
 */
function calculoIRRF(salario_bruto) {
    const inss = calculoINSS(salario_bruto);
    const salario_sem_inss = salario_bruto - inss;

    if (salario_sem_inss <= 2112) {
        return [0, inss];
    }
    if (salario_sem_inss <= 2826.65) {
        return [arredondaDuasCasas(salario_sem_inss * 0.075 - 158.4), inss];
    }
    if (salario_sem_inss <= 3752.05) {
        return [arredondaDuasCasas(salario_sem_inss * 0.15 - 370.4), inss];
    }
    if (salario_sem_inss <= 4664.68) {
        return [arredondaDuasCasas(salario_sem_inss * 0.225 - 651.73), inss];
    }
    return [arredondaDuasCasas(salario_sem_inss * 0.275 - 884.96), inss];
}

/**
 *
 * @param salario_bruto
 * @returns
 */
function calculoEncargosEmpregador(salario_bruto) {
    const inssEmpregador = arredondaDuasCasas(0.08 * salario_bruto);
    const fgts = arredondaDuasCasas(0.08 * salario_bruto);
    const seguroAcidenteTrabalho = arredondaDuasCasas(0.008 * salario_bruto);

    return {
        inssEmpregador,
        fgts,
        seguroAcidenteTrabalho,
        total: arredondaDuasCasas(inssEmpregador + fgts + seguroAcidenteTrabalho)
    };
}

function apertarBotao() {
    const input = parseFloat(document.getElementById("inputValue").value);
    if (!isNaN(input)) {
        const irrfResultado = calculoIRRF(input);
        const encargosEmpregador = calculoEncargosEmpregador(input);

        document.getElementById("inss").innerText = irrfResultado[1];
        document.getElementById("irrf").innerText = irrfResultado[0];
        document.getElementById("inssEmpregador").innerText = encargosEmpregador.inssEmpregador;
        document.getElementById("fgts").innerText = encargosEmpregador.fgts;
        document.getElementById("seguroAcidenteTrabalho").innerText = encargosEmpregador.seguroAcidenteTrabalho;
        document.getElementById("totalEncargos").innerText = encargosEmpregador.total;
    }
}

module.exports = {calculoINSS, calculoIRRF, calculoEncargosEmpregador, apertarBotao};
