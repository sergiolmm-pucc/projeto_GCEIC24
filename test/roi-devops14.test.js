//Testes unitários

const { calculateRoi, roiSchema } = require("../services/roi-devops14-service");

describe("calculateRoi", () => {
  test("should calculate ROI correctly with valid numbers", () => {
    const roi = calculateRoi(200, 100);
    expect(roi).toBeCloseTo(100);
  });

  test("should throw an error if ganhoInvestimento is less than or equal to 0", () => {
    expect(() => calculateRoi(0, 100)).toThrow("Os valores devem ser maiores que zero");
    expect(() => calculateRoi(-10, 100)).toThrow("Os valores devem ser maiores que zero");
  });

  test("should throw an error if custoInvestimento is less than or equal to 0", () => {
    expect(() => calculateRoi(200, 0)).toThrow("Os valores devem ser maiores que zero");
    expect(() => calculateRoi(200, -100)).toThrow("Os valores devem ser maiores que zero");
  });

  test("should handle string inputs that can be converted to numbers", () => {
    const roi = calculateRoi("200", "100");
    expect(roi).toBeCloseTo(100);
  });

  test("should throw an error for non-numeric inputs", () => {
    expect(() => calculateRoi("abc", 100)).toThrow("Parâmetros inválidos");
    expect(() => calculateRoi(200, "xyz")).toThrow("Parâmetros inválidos");
  });
});

describe("roiSchema", () => {
  test("should validate and transform valid inputs", () => {
    const data = { ganhoInvestimento: "200", custoInvestimento: "100" };
    const parsed = roiSchema.parse(data);
    expect(parsed.ganhoInvestimento).toBe(200);
    expect(parsed.custoInvestimento).toBe(100);
  });

  test("should throw an error for invalid inputs", () => {
    expect(() => roiSchema.parse({ ganhoInvestimento: "abc", custoInvestimento: 100 })).toThrow();
    expect(() => roiSchema.parse({ ganhoInvestimento: 200, custoInvestimento: "xyz" })).toThrow();
  });
});



//Testes de funcionalidades

const request = require("supertest");
const app = require("../app"); // Caminho para a sua aplicação principal

describe("ROI API", () => {
  test("should serve the ROI page", async () => {
    const response = await request(app).get("/roi");
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMatch(/html/);
  });

  test("should calculate ROI with valid numbers", async () => {
    const response = await request(app)
      .post("/roi/calcular")
      .send({ ganhoInvestimento: 200, custoInvestimento: 100 });

    expect(response.status).toBe(200);
    expect(response.body.roi).toBeCloseTo(100);
  });

  test("should calculate ROI with valid string numbers", async () => {
    const response = await request(app)
      .post("/roi/calcular")
      .send({ ganhoInvestimento: "200", custoInvestimento: "100" });

    expect(response.status).toBe(200);
    expect(response.body.roi).toBeCloseTo(100);
  });

  test("should return error for missing ganhoInvestimento", async () => {
    const response = await request(app)
      .post("/roi/calcular")
      .send({ custoInvestimento: 100 });

    expect(response.status).toBe(400);
  });

  test("should return error for missing custoInvestimento", async () => {
    const response = await request(app)
      .post("/roi/calcular")
      .send({ ganhoInvestimento: 200 });

    expect(response.status).toBe(400);
  });

  test("should return error for non-numeric ganhoInvestimento", async () => {
    const response = await request(app)
      .post("/roi/calcular")
      .send({ ganhoInvestimento: "abc", custoInvestimento: 100 });

    expect(response.status).toBe(400);
  });

  test("should return error for non-numeric custoInvestimento", async () => {
    const response = await request(app)
      .post("/roi/calcular")
      .send({ ganhoInvestimento: 200, custoInvestimento: "abc" });

    expect(response.status).toBe(400);
  });

  test("should return error for ganhoInvestimento less than 1", async () => {
    const response = await request(app)
      .post("/roi/calcular")
      .send({ ganhoInvestimento: 0, custoInvestimento: 100 });

    expect(response.status).toBe(400);
  });

  test("should return error for custoInvestimento less than 1", async () => {
    const response = await request(app)
      .post("/roi/calcular")
      .send({ ganhoInvestimento: 200, custoInvestimento: 0 });

    expect(response.status).toBe(400);
  });
});