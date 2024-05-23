document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("meuFormulario");
    if (formulario) {
        formulario.addEventListener("submit", function(event) {
            event.preventDefault(); // Evita o comportamento padrão do formulário de enviar a requisição

            // Obtém os valores dos inputs do formulário
            const cp = document.getElementById("cp").value;
            const df = document.getElementById("df").value;
            const dv = document.getElementById("dv").value;
            const ml = document.getElementById("ml").value;

            // Cria um objeto JSON com os valores dos inputs
            const formData = {
                cp: parseFloat(cp),
                df: parseFloat(df),
                dv: parseFloat(dv),
                ml: parseFloat(ml),
            };

            // Envia uma requisição HTTP POST para a rota definida no app.js com os dados do formulário
            fetch("/dev-ops-3-mark-up", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", // Define o tipo de conteúdo como JSON
                },
                body: JSON.stringify(formData), // Converte o objeto JSON em uma string JSON
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erro ao enviar requisição.");
                }
                return response.json(); // Se a resposta for OK, você pode tratar a resposta aqui
            })
            .then((data) => {
                // Exibir a resposta na tela
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
    // Selecione o elemento para exibir a resposta
    const respostaElement = document.getElementById("resposta");

    // Limpe qualquer conteúdo anterior
    respostaElement.innerHTML = "";

    // Crie um elemento de parágrafo para exibir a resposta
    const paragrafo = document.createElement("p");

    // Verifique se a resposta é um objeto
    if (typeof data === "object") {
        // Se for um objeto, converte para JSON e exibe
        mk = JSON.stringify(data.mk);
        cf = JSON.stringify(data.cf);
        paragrafo.textContent = `MarkUp: ${mk} | Custo Final: ${cf}`;
    } else {
        // Se não for um objeto, exibe diretamente
        paragrafo.textContent = data;
    }

    // Adicione o parágrafo ao elemento de resposta
    respostaElement.appendChild(paragrafo);
}
