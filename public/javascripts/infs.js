document.getElementById('formulario-imposto').addEventListener('submit', async function(event) {
    event.preventDefault();

    const price = parseFloat(document.getElementById('price').value);
    const tax = parseFloat(document.getElementById('tax').value);

    if (isNaN(price) || isNaN(tax)) {
        alert("Por favor, insira valores válidos para preço e alíquota.");
        return;
    }

    try {
        const response = await fetch('/infs', { // Rota correta
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                price: price,
                tax: tax
            })
        });

        if (response.ok) { // Verifica se a resposta está OK
            const result = await response.json();
            alert(`O valor do imposto é: R$ ${result.imposto}.\nO valor final do serviço é: R$ ${result.valorFinal}`);
        } else {
            console.error('Erro ao calcular o imposto:', response.statusText);
        }
    } catch (error) {
        console.error('Erro ao calcular o imposto:', error);
    }
});
