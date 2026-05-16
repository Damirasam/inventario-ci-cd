const request = require("supertest");
const app = require("./app");

describe("API productos", () => {

    test("debe responder 200", async () => {

        const response = await request(app)
            .get("/api/productos");

        expect(response.statusCode).toBe(200);

    });

});