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

router.post("/mercury", (req, res) => {
  const weight = req.body.weight;
  const mercuryWeight = (weight * 0.38).toFixed(2);
  return res.send(`Your weight on Mercury is ${mercuryWeight} kg`);
});

router.post("/venus", (req, res) => {
  const weight = req.body.weight;
  const venusWeight = (weight * 0.91).toFixed(2);
  return res.send(`Your weight on Venus is ${venusWeight} kg`);
});

router.post("/mars", (req, res) => {
  const weight = req.body.weight;
  const marsWeight = (weight * 0.38).toFixed(2);
  return res.send(`Your weight on Mars is ${marsWeight} kg`);
});

router.post("/jupiter", (req, res) => {
  const weight = req.body.weight;
  const jupiterWeight = (weight * 2.34).toFixed(2);
  return res.send(`Your weight on Jupiter is ${jupiterWeight} kg`);
});

router.post("/uranus", (req, res) => {
  const weight = req.body.weight;
  const uranusWeight = (weight * 0.92).toFixed(2);
  return res.send(`Your weight on Uranus is ${uranusWeight} kg`);
});

router.post("/neptune", (req, res) => {
  const weight = req.body.weight;
  const neptuneWeight = (weight * 1.19).toFixed(2);
  return res.send(`Your weight on Neptune is ${neptuneWeight} kg`);
});

router.post("/pluto", (req, res) => {
  const weight = req.body.weight;
  const plutoWeight = (weight * 0.06).toFixed(2);
  return res.send(`Your weight on Pluto is ${plutoWeight} kg`);
});

module.exports = router;
