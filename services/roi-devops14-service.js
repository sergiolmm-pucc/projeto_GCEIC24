const zod = require("zod");

// Validação dos valores de entrada
const roiSchema = zod.object({
  ganhoInvestimento: zod.union([
    zod
      .string()
      .min(1)
      .refine((val) => !isNaN(Number(val)), { message: "Must be a number" })
      .transform((value) => Number(value)),
    zod.number().min(1),
  ]),
  custoInvestimento: zod.union([
    zod
      .string()
      .min(1)
      .refine((val) => !isNaN(Number(val)), { message: "Must be a number" })
      .transform((value) => Number(value)),
    zod.number().min(1),
  ]),
});

function calculateRoi(ganhoInvestimento, custoInvestimento) {
  if (isNaN(ganhoInvestimento) || isNaN(custoInvestimento)) {
    throw new Error("Parâmetros inválidos");
  }
  if (ganhoInvestimento <= 0 || custoInvestimento <= 0) {
    throw new Error("Os valores devem ser maiores que zero");
  }
  const roi =
    ((Number(ganhoInvestimento) - Number(custoInvestimento)) /
      Number(custoInvestimento)) *
    100;
  return roi;
}

module.exports = {
  roiSchema,
  calculateRoi,
};
