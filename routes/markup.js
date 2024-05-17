const express = require('express');
const router = express.Router();
// eslint-disable-next-line no-undef
const fs = require('fs');
// eslint-disable-next-line no-undef
const calcularMarkup = require('../public/javascripts/calculoMarkup.js');


router.get('/markup', function(req, res) {
    fs.readFile('./public/html/markup.html', function (err, html) {
        if (err) {
            throw err;
        }
        else {
           res.writeHeader(200, {"Content-Type": "text/html"});
            res.write(html);
            res.end();
        }
    });
});

router.post('/markup', function(req, res) {
    const { custo, markup } = req.body;
    try {
        const mk = calcularMarkup(parseFloat(custo), parseFloat(markup));
        const cf = custo + mk;
        res.json({ mk, cf, custoFinal: cf }); // Incluir custoFinal na resposta
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// eslint-disable-next-line no-undef
module.exports = router;