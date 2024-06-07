var express = require("express");
var router = express.Router();
const fs = require("fs");
const { roiSchema, calculateRoi } = require("../services/roi-devops14-service");
var zod = require("zod");
const fs = require("fs");

// Validação dos valores de entrada
// TODO: Verificar se funciona com o Gitch
// TODO: Adicionar o zod no package.json

const roiSchema = zod.object({
  ganhoInvestimento: zod.union([
    zod
      .string()
      .min(1)
      .transform((value) => Number(value)),
    zod.number().min(1),
  ]),
  custoInvestimento: zod.union([
    zod
      .string()
      .min(1)
      .transform((value) => Number(value)),
    zod.number().min(1),
  ]),
});

// Rota para verificar a integridade
router.get("/", (_req, res) => {
  fs.readFile("./public/html/roi-devops14.html", function(err, html) {
    if (err) {
      res.status(500).send("Erro ao carregar a página HTML");
    } else {
      res.writeHeader(200, { "Content-Type": "text/html" });
      res.write(html);
      res.end();
    }
  });
});

// Rota para calcular o ROI
router.post("/calcular", (req, res) => {
  try {
    const result = roiSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).send("Parâmetros inválidos");
    }

    const { ganhoInvestimento, custoInvestimento } = result.data;

    const roi = calculateRoi(ganhoInvestimento, custoInvestimento);

    return res.status(200).send({ roi });
  } catch (res) {
    return res.status(500).send("Erro no servidor");
  }
});

module.exports = router;