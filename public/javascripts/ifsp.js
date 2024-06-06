function calcularImposto(price, tax) {
    // Verifica se os valores são números válidos
    if (isNaN(price) || isNaN(tax)) {
        throw new Error('Valores inválidos. Por favor, insira valores numéricos.');
    }

    // Calcula o imposto
    const imposto = price * (tax / 100);
    const precoFinal = price + imposto;

    return {
        imposto: imposto.toFixed(2),
        precoFinal: precoFinal.toFixed(2)
    };
}

// Exporta a função para uso em testes
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { calcularImposto };
}

// Função para ser usada no navegador
function handleCalcularImposto(event) {
    event.preventDefault();

    const priceInput = document.getElementById('price');
    const taxInput = document.getElementById('tax');

    const price = parseFloat(priceInput.value);
    const tax = parseFloat(taxInput.value);

    try {
        const result = calcularImposto(price, tax);
        alert(`Valor do Produto: R$ ${price.toFixed(2)}\nAlíquota: ${tax.toFixed(2)}%\nImposto: R$ ${result.imposto}\nPreço Final: R$ ${result.precoFinal}`);
    } catch (error) {
        alert(error.message);
    }
}

// Adiciona o evento ao botão se o script estiver rodando no navegador
if (typeof window !== 'undefined') {
    document.querySelector('.SubmitInput').addEventListener('click', handleCalcularImposto);
}