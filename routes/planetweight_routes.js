var express = require('express');
const {join} = require("node:path");
var router = express.Router();
express.static("/", undefined)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(join(__dirname, '../public/html/index.html'))
});




// Body	Multiple of Earth’s Gravity
// Sun	27.01
// Mercury	0.38
// Venus	0.91
// Earth	1 (defined)
// Moon	0.166
// Mars	0.38
// Jupiter	2.34
// Saturn	1.06
// Uranus	0.92
// Neptune	1.19
// Pluto	0.06


router.post('/mercury',(req,res) => {
  const weight = req.body.weight;
  return res.send(`your weight is  ${weight*0.38} kg`)
})
router.post('/venus',(req,res) => {
  const weight = req.body.weight;
  return res.send(`your weight is  ${weight*0.91} kg`)
})

router.post('/mars',(req,res) => {
  const weight = req.body.weight;
  return res.send(`your weight is  ${weight*0.38} kg`)
})


router.post('/jupiter',(req,res) => {
  const weight = req.body.weight;
  return res.send(`your weight is  ${weight*2.34} kg`)
})


router.post('/uranus',(req,res) => {
  const weight = req.body.weight;
  return res.send(`your weight is  ${weight*0.92} kg`)
})


router.post('/neptune',(req,res) => {
  const weight = req.body.weight;
  return res.send(`your weight is  ${weight*1.19} kg`)
})

router.post('/pluto',(req,res) => {
  const weight = req.body.weight;
  return res.send(`your weight is  ${weight*0.06} kg`)
})



module.exports = router;
