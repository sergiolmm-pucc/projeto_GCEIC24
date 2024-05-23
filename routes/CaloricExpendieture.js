const express = require('express');
const CaloricExpenditureController = require('../controllers/CaloricExpenditureController');

const router = express.Router();

router.post('/', CaloricExpenditureController.calculate);

module.exports = router;
