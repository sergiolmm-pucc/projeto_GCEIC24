const express = require("express");
const temperatureRouter = express.Router();
const fs = require("fs");

// Funções para converter temperaturas

function convertFromCelsius(celsius) {
  if (celsius === undefined) {
    throw new Error('Todos os parâmetros devem ser fornecidos.');
  }
  if (isNaN(celsius)) {
    throw new Error('Parâmetros invalidos');
  }

  return {
    celsius: celsius,
    fahrenheit: (celsius * 9) / 5 + 32,
    kelvin: celsius + 273,
  };
}

function convertFromFahrenheit(fahrenheit) {

  if (fahrenheit === undefined) {
    throw new Error('Todos os parâmetros devem ser fornecidos.');
  }
  if (isNaN(fahrenheit)) {
    throw new Error('Parâmetros invalidos');
  }
  return {
    celsius: ((fahrenheit - 32) * 5) / 9,
    fahrenheit: fahrenheit,
    kelvin: ((fahrenheit - 32) * 5) / 9 + 273,
  };
}

function convertFromKelvin(kelvin) {
  if (kelvin === undefined) {
    throw new Error('Todos os parâmetros devem ser fornecidos.');
  }
  if (isNaN(kelvin)) {
    throw new Error('Parâmetros invalidos');
  }
  
  return {
    celsius: kelvin - 273,
    fahrenheit: ((kelvin - 273) * 9) / 5 + 32,
    kelvin: kelvin,
  };
}

temperatureRouter.get("/", (_req, res) => {
  fs.readFile("./public/html/temperature.html", function(err, html) {
    if (err) {
      throw err;
    } else {
      res.writeHeader(200, { "Content-Type": "text/html" });
      res.write(html);
      res.end();
    }
  });
});

temperatureRouter.get("/convert", (req, res) => {
  const temp = parseFloat(req.query.temp);
  const tempType = req.query.tempType;

  let result;
  switch (tempType) {
    case "celsius":
      result = convertFromCelsius(temp);
      break;
    case "fahrenheit":
      result = convertFromFahrenheit(temp);
      break;
    case "kelvin":
      result = convertFromKelvin(temp);
      break;
    default:
      return res.status(400).json({ error: "Tipo de temperatura inválido" });
  }

  // Retorna os dados convertidos como JSON
  res.json(result);
});

module.exports = {temperatureRouter, convertFromCelsius, convertFromFahrenheit, convertFromKelvin};
