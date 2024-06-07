const request = require("supertest");
const express = require("express");
const bodyParser = require("body-parser");
const planetweightRoutes = require("../routes/planetweight_routes");

const app = express();
app.use(bodyParser.json());
app.use("/planetweight", planetweightRoutes);

describe("Planet Weight Routes", () => {
	// it("should return 200 and the HTML content for GET /planetweight", async () => {
	// 	const res = await request(app).get("/planetweight");
	// 	expect(res.status).toBe(200);
	// 	expect(res.headers["content-type"]).toBe("text/html");
	// 	expect(res.text).toContain("<html>"); // Assuming the HTML file contains this tag
	// });

	const planets = [
		{ name: "mercury", multiplier: 0.38, expected: "38.00" },
		{ name: "venus", multiplier: 0.91, expected: "91.00" },
		{ name: "mars", multiplier: 0.38, expected: "38.00" },
		{ name: "jupiter", multiplier: 2.34, expected: "234.00" },
		{ name: "uranus", multiplier: 0.92, expected: "92.00" },
		{ name: "neptune", multiplier: 1.19, expected: "119.00" },
		{ name: "pluto", multiplier: 0.06, expected: "6.00" },
	];

	planets.forEach((planet) => {
		it(`should return the correct weight for POST /planetweight/${planet.name}`, async () => {
			const res = await request(app)
				.post(`/planetweight/${planet.name}`)
				.send({ weight: 100 });

			expect(res.status).toBe(200);
			expect(res.text).toBe(planet.expected);
		});
	});
});
