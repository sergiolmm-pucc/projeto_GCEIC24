document.addEventListener("DOMContentLoaded", function() {
  document
    .getElementById("tmbForm")
    .addEventListener("submit", function(event) {
      event.preventDefault();

      // Obtém os valores do formulário
      const altura = parseFloat(document.getElementById("altura").value);
      const peso = parseFloat(document.getElementById("peso").value);
      const idade = parseInt(document.getElementById("idade").value);
      const genero = document.querySelector('input[name="genero"]:checked')
        .value;
      const atividade = document.getElementById("atividade").value;

      if (altura <= 0 || peso <= 0 || idade <= 0) {
        alert(
          "Por favor, insira valores positivos e maiores que 1 para altura, peso e idade."
        );
        return;
      }

      // Calcula a TMB baseando-se no gênero
      let tmb;
      if (genero === "homem") {
        tmb = calcularTMBHomem(peso, altura, idade);
      } else {
        tmb = calcularTMBMulher(peso, altura, idade);
      }

      // Calcula o fator de atividade física
      const fatorAtividade = calcularFatorAtividade(atividade);

      // Calcula a TMB total considerando o fator de atividade física
      const tmbTotal = tmb * fatorAtividade;

      // Exibe o resultado
      document.getElementById(
        "resultado"
      ).innerText = `Sua Taxa Metabólica Basal (TMB) é: ${tmbTotal.toFixed(
        2
      )} calorias por dia.`;
    });
});

function calcularFatorAtividade(atividade) {
  let fatorAtividade;
  switch (atividade) {
    case "sedentario":
      fatorAtividade = 1.2;
      break;
    case "leve":
      fatorAtividade = 1.375;
      break;
    case "moderado":
      fatorAtividade = 1.55;
      break;
    case "ativo":
      fatorAtividade = 1.725;
      break;
    case "extremo":
      fatorAtividade = 1.9;
      break;
    default:
      fatorAtividade = 1.2; // Caso padrão para evitar erro
  }
  return fatorAtividade;
}

function calcularTMBHomem(peso, altura, idade) {
  return 66 + 13.7 * peso + 5 * altura - 6.8 * idade;
}

function calcularTMBMulher(peso, altura, idade) {
  return 655 + 9.6 * peso + 1.8 * altura - 4.7 * idade;
}
