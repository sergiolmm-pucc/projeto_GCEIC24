var express = require("express");
var router = express.Router();
var fs = require("fs");

/* GET home page. */
router.get("/", function(_req, res) {
  fs.readFile("./public/html/planetweight.html", function(err, html) {
    if (err) {
      console.error("Failed to read HTML file:", err);
      res.status(500).send("Error loading the page.");
    } else {
      res.writeHeader(200, { "Content-Type": "text/html" });
      res.write(html);
      res.end();
    }
  });
});

// Route for Mercury
router.post("/mercury", (req, res) => {
  const weight = parseFloat(req.body.weight);
  if (isNaN(weight) || weight < 0) {
    return res.status(400).send("Invalid weight input; weight must be a non-negative number.");
  }
  const mercuryWeight = (weight * 0.38).toFixed(2);
  return res.send(mercuryWeight);
});

// Route for Venus
router.post("/venus", (req, res) => {
  const weight = parseFloat(req.body.weight);
  if (isNaN(weight) || weight < 0) {
    return res.status(400).send("Invalid weight input; weight must be a non-negative number.");
  }
  const venusWeight = (weight * 0.91).toFixed(2);
  return res.send(venusWeight);
});

// Route for Mars
router.post("/mars", (req, res) => {
  const weight = parseFloat(req.body.weight);
  if (isNaN(weight) || weight < 0) {
    return res.status(400).send("Invalid weight input; weight must be a non-negative number.");
  }
  const marsWeight = (weight * 0.38).toFixed(2);
  return res.send(marsWeight);
});

// Route for Jupiter
router.post("/jupiter", (req, res) => {
  const weight = parseFloat(req.body.weight);
  if (isNaN(weight) || weight < 0) {
    return res.status(400).send("Invalid weight input; weight must be a non-negative number.");
  }
  const jupiterWeight = (weight * 2.34).toFixed(2);
  return res.send(jupiterWeight);
});

// Route for Uranus
router.post("/uranus", (req, res) => {
  const weight = parseFloat(req.body.weight);
  if (isNaN(weight) || weight < 0) {
    return res.status(400).send("Invalid weight input; weight must be a non-negative number.");
  }
  const uranusWeight = (weight * 0.92).toFixed(2);
  return res.send(uranusWeight);
});

// Route for Neptune
router.post("/neptune", (req, res) => {
  const weight = parseFloat(req.body.weight);
  if (isNaN(weight) || weight < 0) {
    return res.status(400).send("Invalid weight input; weight must be a non-negative number.");
  }
  const neptuneWeight = (weight * 1.19).toFixed(2);
  return res.send(neptuneWeight);
});

// Route for Pluto
router.post("/pluto", (req, res) => {
  const weight = parseFloat(req.body.weight);
  if (isNaN(weight) || weight < 0) {
    return res.status(400).send("Invalid weight input; weight must be a non-negative number.");
  }
  const plutoWeight = (weight * 0.06).toFixed(2);
  return res.send(plutoWeight);
});

module.exports = router;
