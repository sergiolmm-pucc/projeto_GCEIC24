document.getElementById('formulario-imposto').addEventListener('submit', async function(event) {
    event.preventDefault();

    const price = document.getElementById('price').value;
    const tax = document.getElementById('tax').value;

    try {
        const response = await fetch('/ifsp', { // Corrigido o caminho da rota
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                price: price,
                tax: tax
            })
        });

        if (response.ok) { // Verifica se a resposta está OK
            const result = await response.json();
            alert(`O valor do imposto é: R$ ${result.imposto}.\nO valor final do produto é: R$ ${result.valorFinal}`);
        } else {
            console.error('Erro ao calcular o imposto:', response.statusText);
        }
    } catch (error) {
        console.error('Erro ao calcular o imposto:', error);
    }
});
