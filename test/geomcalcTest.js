const assert = require("assert");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>GeomCalc</title>
    <link rel="stylesheet" href="../stylesheets/geomcalcStyles.css" />
    <script>
      function calcularArea() {
        const forma = document.getElementById("forma").value;
        let area;

        if (forma === "quadrado") {
          const lado = parseFloat(document.getElementById("valorLado").value);
          area = lado * lado;
        } else if (forma === "circulo") {
          const raio = parseFloat(document.getElementById("valorRaio").value);
          area = Math.PI * raio * raio;
        } else if (forma === "retangulo") {
          const largura = parseFloat(document.getElementById("valorLargura").value);
          const altura = parseFloat(document.getElementById("valorAltura").value);
          area = largura * altura;
        } else if (forma === "pentagono") {
          const lado = parseFloat(document.getElementById("valorLadoPentagono").value);
          area = (5 / 4) * Math.pow(lado, 2) * (1 / Math.tan(Math.PI / 5));
        } else if (forma === "losango") {
          const diagonal1 = parseFloat(document.getElementById("valorDiagonal1").value);
          const diagonal2 = parseFloat(document.getElementById("valorDiagonal2").value);
          area = (diagonal1 * diagonal2) / 2;
        } else if (forma === "hexagono") {
          const lado = parseFloat(document.getElementById("valorLadoHexagono").value);
          area = (3 * Math.sqrt(3) / 2) * Math.pow(lado, 2);
        } else if (forma === "trapezio") {
          const baseMaior = parseFloat(document.getElementById("valorBaseMaior").value);
          const baseMenor = parseFloat(document.getElementById("valorBaseMenor").value);
          const altura = parseFloat(document.getElementById("valorAlturaTrapezio").value);
          area = ((baseMaior + baseMenor) * altura) / 2;
        }

        document.getElementById("resultado").value = area;
      }
    </script>
  </head>
  <body>
    <div class="container">
      <h1>Cálculo de Formas Geométricas</h1>
      <br />
      <label for="forma">Selecione a forma:</label>
      <select id="forma" name="forma">
        <option value="quadrado">Quadrado</option>
        <option value="circulo">Círculo</option>
        <option value="retangulo">Retângulo</option>
        <option value="pentagono">Pentágono</option>
        <option value="losango">Losango</option>
        <option value="hexagono">Hexágono</option>
        <option value="trapezio">Trapézio</option>
      </select>
      <br />
      <div id="campoQuadrado">
        <label for="valorLado">Lado:</label>
        <input type="number" name="valorLado" id="valorLado" /><br />
      </div>
      <div id="campoCirculo" class="hidden">
        <label for="valorRaio">Raio:</label>
        <input type="number" name="valorRaio" id="valorRaio" /><br />
      </div>
      <div id="campoRetangulo" class="hidden">
        <label for="valorLargura">Largura:</label>
        <input type="number" name="valorLargura" id="valorLargura" /><br />
        <label for="valorAltura">Altura:</label>
        <input type="number" name="valorAltura" id="valorAltura" /><br />
      </div>
      <div id="campoPentagono" class="hidden">
        <label for="valorLadoPentagono">Lado:</label>
        <input type="number" name="valorLadoPentagono" id="valorLadoPentagono" /><br />
      </div>
      <div id="campoLosango" class="hidden">
        <label for="valorDiagonal1">Diagonal 1:</label>
        <input type="number" name="valorDiagonal1" id="valorDiagonal1" /><br />
        <label for="valorDiagonal2">Diagonal 2:</label>
        <input type="number" name="valorDiagonal2" id="valorDiagonal2" /><br />
      </div>
      <div id="campoHexagono" class="hidden">
        <label for="valorLadoHexagono">Lado:</label>
        <input type="number" name="valorLadoHexagono" id="valorLadoHexagono" /><br />
      </div>
      <div id="campoTrapezio" class="hidden">
        <label for="valorBaseMaior">Base Maior:</label>
        <input type="number" name="valorBaseMaior" id="valorBaseMaior" /><br />
        <label for="valorBaseMenor">Base Menor:</label>
        <input type="number" name="valorBaseMenor" id="valorBaseMenor" /><br />
        <label for="valorAlturaTrapezio">Altura:</label>
        <input type="number" name="valorAlturaTrapezio" id="valorAlturaTrapezio" /><br />
      </div>
      <label for="resultado">Área:</label>
      <input type="text" name="resultado" id="resultado" readonly /><br />
      <button id="calcula" name="calcula" onclick="calcularArea()">
        Calcular
      </button>
    </div>
  </body>
</html>
`;

describe("GeomCalc Tests", function() {
  let window;
  let document;

  beforeEach(function() {
    const dom = new JSDOM(html, {
      runScripts: "dangerously",
      resources: "usable",
    });
    window = dom.window;
    document = window.document;
  });

  it("should calculate the area of a square", function() {
    document.getElementById("forma").value = "quadrado";
    document.getElementById("valorLado").value = 4;
    window.calcularArea();
    const resultado = parseFloat(document.getElementById("resultado").value);
    assert.strictEqual(resultado, 16);
  });

  it("should calculate the area of a circle", function() {
    document.getElementById("forma").value = "circulo";
    document.getElementById("valorRaio").value = 3;
    window.calcularArea();
    const resultado = parseFloat(document.getElementById("resultado").value);
    assert.strictEqual(resultado, Math.PI * 3 * 3);
  });

  it("should calculate the area of a rectangle", function() {
    document.getElementById("forma").value = "retangulo";
    document.getElementById("valorLargura").value = 4;
    document.getElementById("valorAltura").value = 5;
    window.calcularArea();
    const resultado = parseFloat(document.getElementById("resultado").value);
    assert.strictEqual(resultado, 20);
  });

  it("should calculate the area of a pentagon", function() {
    document.getElementById("forma").value = "pentagono";
    document.getElementById("valorLadoPentagono").value = 4;
    window.calcularArea();
    const resultado = parseFloat(document.getElementById("resultado").value);
    const expected = (5 / 4) * Math.pow(4, 2) * (1 / Math.tan(Math.PI / 5));
    assert.strictEqual(resultado, expected);
  });

  it("should calculate the area of a losango", function() {
    document.getElementById("forma").value = "losango";
    document.getElementById("valorDiagonal1").value = 5;
    document.getElementById("valorDiagonal2").value = 6;
    window.calcularArea();
    const resultado = parseFloat(document.getElementById("resultado").value);
    assert.strictEqual(resultado, 15);
  });

  it("should calculate the area of a hexagon", function() {
    document.getElementById("forma").value = "hexagono";
    document.getElementById("valorLadoHexagono").value = 3;
    window.calcularArea();
    const resultado = parseFloat(document.getElementById("resultado").value);
    const expected = ((3 * Math.sqrt(3)) / 2) * Math.pow(3, 2);
    assert.strictEqual(resultado, expected);
  });

  it("should calculate the area of a trapezoid", function() {
    document.getElementById("forma").value = "trapezio";
    document.getElementById("valorBaseMaior").value = 7;
    document.getElementById("valorBaseMenor").value = 5;
    document.getElementById("valorAlturaTrapezio").value = 4;
    window.calcularArea();
    const resultado = parseFloat(document.getElementById("resultado").value);
    assert.strictEqual(resultado, 24);
  });
});
