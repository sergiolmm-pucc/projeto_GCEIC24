var express = require("express");
var router = express.Router();
var fs = require("fs");

/* GET home page. */
router.get("/", function(_req, res) {
  fs.readFile("./public/html/planetweight.html", function(err, html) {
    if (err) {
      throw err;
    } else {
      res.writeHeader(200, { "Content-Type": "text/html" });
      res.write(html);
      res.end();
    }
  });
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

router.post("/mercury", (req, res) => {
  const weight = req.body.weight;
  return res.send(`your weight is  ${weight * 0.38} kg`);
});
router.post("/venus", (req, res) => {
  const weight = req.body.weight;
  return res.send(`your weight is  ${weight * 0.91} kg`);
});

router.post("/mars", (req, res) => {
  const weight = req.body.weight;
  return res.send(`your weight is  ${weight * 0.38} kg`);
});

router.post("/jupiter", (req, res) => {
  const weight = req.body.weight;
  return res.send(`your weight is  ${weight * 2.34} kg`);
});

router.post("/uranus", (req, res) => {
  const weight = req.body.weight;
  return res.send(`your weight is  ${weight * 0.92} kg`);
});

router.post("/neptune", (req, res) => {
  const weight = req.body.weight;
  return res.send(`your weight is  ${weight * 1.19} kg`);
});

router.post("/pluto", (req, res) => {
  const weight = req.body.weight;
  return res.send(`your weight is  ${weight * 0.06} kg`);
});

module.exports = router;
