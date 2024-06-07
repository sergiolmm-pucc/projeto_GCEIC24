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
  return res.send(mercuryWeight);
});

router.post("/venus", (req, res) => {
  const weight = req.body.weight;
  const venusWeight = (weight * 0.91).toFixed(2);
  return res.send(venusWeight);
});

router.post("/mars", (req, res) => {
  const weight = req.body.weight;
  const marsWeight = (weight * 0.38).toFixed(2);
  return res.send(marsWeight);
});

router.post("/jupiter", (req, res) => {
  const weight = req.body.weight;
  const jupiterWeight = (weight * 2.34).toFixed(2);
  return res.send(jupiterWeight);
});

router.post("/uranus", (req, res) => {
  const weight = req.body.weight;
  const uranusWeight = (weight * 0.92).toFixed(2);
  return res.send(uranusWeight);
});

router.post("/neptune", (req, res) => {
  const weight = req.body.weight;
  const neptuneWeight = (weight * 1.19).toFixed(2);
  return res.send(neptuneWeight);
});

router.post("/pluto", (req, res) => {
  const weight = req.body.weight;
  const plutoWeight = (weight * 0.06).toFixed(2);
  return res.send(plutoWeight);
});

module.exports = router;
