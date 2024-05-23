var express = require('express');
var router = express.Router();
var path = require('path');

// Middleware para fazer parse dos dados enviados no corpo da requisição
router.use(express.urlencoded({ extended: true }));

// Rota para a página de Imposto
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '..', 'public', 'html', 'ifsp.html'));
});
  
// Rota para calcular o imposto
router.post('/', (req, res) => {
    const { price, tax } = req.body;
    const precoNumerico = parseFloat(price);
    const taxaNumerica = parseFloat(tax);
    const imposto = (precoNumerico * taxaNumerica) / 100;
    const valorFinal = precoNumerico + imposto; // Calcula o valor final do produto
    res.json({ imposto: imposto.toFixed(2), valorFinal: valorFinal.toFixed(2) });
});


module.exports = router;
