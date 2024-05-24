const express = require("express");
const router = express.Router();
const fs = require("fs");

const CaloricExpenditureController = require("../controllers/CaloricExpenditureController");

router.post("/CE", CaloricExpenditureController.calculate);

router.get("/", (_req, res) => {
  fs.readFile("./public/html/caloricExpenditure.html", function(err, html) {
    if (err) {
      throw err;
    } else {
      res.writeHeader(200, { "Content-Type": "text/html" });
      res.write(html);
      res.end();
    }
  });
});

module.exports = router;
