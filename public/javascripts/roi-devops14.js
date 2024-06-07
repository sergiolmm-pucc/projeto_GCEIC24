const form = document.querySelector("#form-action");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const investimento = document.getElementById("investimento").value;
  const retorno = document.getElementById("retorno").value;

  const response = await fetch(`/roi/calcular`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      ganhoInvestimento: Number(retorno),
      custoInvestimento: Number(investimento),
    }),
  }).then((response) => {
    if (!response.ok) {
      alert("Algo deu errado ao calcular o ROI");
    }
    return response.json();
  });

  if (response.roi) {
    document.getElementById(
      "label-roi"
    ).innerText = `Seu ROI foi de ${response.roi}%`;
  }
});
