function handleSubmit(event) {
    event.preventDefault()
    const form = event.target;
    const formData = new FormData(form);
    const jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });
    fetch('/CE/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
    }).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Erro ao enviar dados!');
        }
    }).then(data => {
        const resultElement = document.getElementById('result');
        const firstElement = data.payload[0];
        resultElement.innerHTML = `<p>Gasto calórico: ${JSON.stringify(firstElement)}</p>`;
    }).catch(error => {
        alert('Erro: ' + error.message);
    });
}