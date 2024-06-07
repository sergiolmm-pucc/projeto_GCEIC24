const express = require("express");
const router = express.Router();
const z = require("zod");
const fs = require("fs");
const {
  calculoMarkUp,
  precoProdutoFinal,
} = require("../services/dev-ops-3-mark-up-services");

const schema = z.object({
  cp: z.number().positive(),
  df: z.number().positive(),
  dv: z.number().positive(),
  ml: z.number().positive(),
});

router.get("/", (_req, res) => {
  fs.readFile("./public/html/dev-ops-3-mark-up.html", function(err, html) {
    if (err) {
      throw err;
    } else {
      res.writeHeader(200, { "Content-Type": "text/html" });
      res.write(html);
      res.end();
    }
  });
});

router.post("/", (req, res) => {
  // console.log(req.body);
  try {
    const { cp, df, dv, ml } = schema.parse(req.body);
    // console.log(req.body.df);
    const mk = calculoMarkUp(df, dv, ml);
    // console.log(mk);
    const cf = precoProdutoFinal(cp, mk);
    // console.log(mk);
    // console.log(cf);
    res.status(200).json({
      mk: Math.round(mk * 100) / 100,
      cf: Math.round(cf * 100) / 100,
    });
  } catch (err) {
    if (err instanceof z.ZodError) {
      res.status(422).json({
        message: "Invalid Data",
        error: err,
      });
    } else {
      // console.log(err);
      res.status(500).json({
        message: "Internal Server Error",
        error: err,
      });
    }
  }
});

module.exports = router;
