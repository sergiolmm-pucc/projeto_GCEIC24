const express = require('express');
const CaloricExpenditureController = require('../controllers/CaloricExpenditureController');
const fs = require('fs');

const router = express.Router();

router.post('/CE', CaloricExpenditureController.calculate);

router.get('/', (req, res) => {
  fs.readFile("./public/html/caloricExpenditure.html", function(err, html) {
    if (err) {
      throw err;
    } else {
      res.writeHeader(200, { "Content-Type": "text/html" });
      res.write(html);
      res.end();
    }
  });
})


module.exports = router;