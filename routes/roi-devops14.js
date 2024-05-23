var express = require("express");
var router = express.Router();

// Validação dos valores de entrada
// TODO: Verificar se funciona com o Gitch
// TODO: Adicionar o zod no package.json
// var zod = require("zod");

// const roiSchema = zod.object({
//   ganhoInvestimento: zod.union([
//     zod
//       .string()
//       .min(1)
//       .transform((value) => Number(value)),
//     zod.number().min(1),
//   ]),
//   custoInvestimento: zod.union([
//     zod
//       .string()
//       .min(1)
//       .transform((value) => Number(value)),
//     zod.number().min(1),
//   ]),
// });

// Rota para verificar a integridade
app.get("/", (_, res) => {
  return res.send("Hello from api PESIII24 - cálculo do ROI");
});

// Rota para calcular o ROI
app.post("/calcular", (req, res) => {
  // const { ganhoInvestimento, custoInvestimento } = roiSchema.parse(req.body);

  const { ganhoInvestimento, custoInvestimento } = req.body;

  const roi =
    ((Number(ganhoInvestimento) - Number(custoInvestimento)) /
      Number(custoInvestimento)) *
    100;

  return res.status(200).send({ roi });
});

module.exports = router;