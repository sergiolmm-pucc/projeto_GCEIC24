document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("temperatureConversorForm");
  const resultDiv = document.getElementById("conversorResult");
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio do formulário padrão
    const formData = new FormData(form);
    const params = new URLSearchParams(formData);
    // Realiza a requisição ao servidor
    fetch(`/temperature/convert?${params.toString()}`)
      .then((response) => response.json())
      .then((data) => {
        // Exibe os dados retornados pelo servidor
        const resultadoHTML = `
                    <h2>Temperatura Convertida</h2>
                    <p><strong>Celsius:</strong> ${data.celsius.toFixed(
                      2
                    )} °C</p>
                    <p><strong>Fahrenheit:</strong> ${data.fahrenheit.toFixed(
                      2
                    )} °F</p>
                    <p><strong>Kelvin:</strong> ${data.kelvin.toFixed(2)} K</p>
                `;
        resultDiv.innerHTML = resultadoHTML;
      })
      .catch((error) => {
        resultDiv.innerHTML = `<p>Erro: ${error.message}</p>`;
      });
  });
});
