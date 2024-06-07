document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("meuFormulario");
    if (formulario) {
        formulario.addEventListener("submit", function(event) {
            event.preventDefault();

            const custo = document.getElementById("custo").value;
            const markup = document.getElementById("markup").value;

            const custoFinal = calcularMarkup(parseFloat(custo), parseFloat(markup));

            const formData = {
                custo: parseFloat(custo),
                markup: parseFloat(markup),
                custoFinal: custoFinal,
            };

            fetch("/markup-8", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erro ao enviar requisição.");
                }
                return response.json();
            })
            .then((data) => {
                mostrarResposta(data);
            })
            .catch((error) => {
                console.error("Erro:", error);
            });
        });
    } else {
        console.error("Elemento com o ID 'meuFormulario' não encontrado.");
    }
});

function mostrarResposta(data) {
    const respostaElement = document.getElementById("resposta");

    respostaElement.innerHTML = "";

    const paragrafo = document.createElement("p");

    if (typeof data === "object") {
        mk = JSON.stringify(data.mk);
        cf = JSON.stringify(data.cf);
        custoFinal = JSON.stringify(data.custoFinal); // Adicionar esta linha
        // eslint-disable-next-line no-undef
        paragrafo.textContent = `MarkUp: ${mk} | Custo Final: ${cf} | Custo Final com Markup: ${custoFinal}`; // Modificar esta linha
    } else {
        paragrafo.textContent = data;
    }

    respostaElement.appendChild(paragrafo);
}