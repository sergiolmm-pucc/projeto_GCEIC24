# projeto_GCEIC24 - integração continua

Projeto da AUlA GCEIC - projeto final devops com github actions

---

# Cálculo do ROI

## Uso

### Rota /roi/calcular

- Método: POST
- Parâmetros de consulta (body parameters):

  - custoInvestimento: (Número) O valor do investimento inicial
  - ganhoInvestimento: (Número) O valor do retorno obtido

- Exemplo de requisição:

```bash
  fetch(
    `http://localhost:3000/roi/calcular`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        custoInvestimento: Number(1000),
        ganhoInvestimento: Number(1500),
      }),
    }
```

Resposta:

```json
{
  "roi": 50
}
```

Onde roi é o valor do Retorno sobre Investimento calculado.
