const request = require("supertest");
const express = require("express");
const bodyParser = require("body-parser");
const planetweightRoutes = require("../routes/planetweight_routes");

const app = express();
app.use(bodyParser.json());
app.use("/planetweight", planetweightRoutes);

describe("Planet Weight Routes", () => {
	it("should return 200 and the HTML content for GET /planetweight", async () => {
		const res = await request(app).get("/planetweight");
		expect(res.status).toBe(200);
		expect(res.headers["content-type"]).toBe("text/html");
	});

	const planets = [
		{ name: "mercury", multiplier: 0.38 },
		{ name: "venus", multiplier: 0.91 },
		{ name: "mars", multiplier: 0.38 },
		{ name: "jupiter", multiplier: 2.34 },
		{ name: "saturn", multiplier: 1.06 },
		{ name: "uranus", multiplier: 0.92 },
		{ name: "neptune", multiplier: 1.19 },
		{ name: "pluto", multiplier: 0.06 },
	];

	planets.forEach((planet) => {
		it(`should return the correct weight for POST /planetweight/${planet.name}`, async () => {
			const res = await request(app)
				.post(`/planetweight/${planet.name}`)
				.send({ weight: 100 });

			expect(res.status).toBe(200);
			expect(res.text).toBe(`Your weight is ${(100 * planet.multiplier).toFixed(2)} kg on this planet.`);
		});

		it(`should return 400 for invalid weight input for POST /planetweight/${planet.name}`, async () => {
			const res = await request(app)
				.post(`/planetweight/${planet.name}`)
				.send({ weight: "invalid" });

			expect(res.status).toBe(400);
			expect(res.text).toBe("Invalid weight input");
		});
	});
});
