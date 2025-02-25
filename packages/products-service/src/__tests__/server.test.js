const request = require("supertest");
const app = require("../server");

describe("Products Service Unit Tests", () => {
  describe("GET /api/products/hello", () => {
    it("should return correct hello message", async () => {
      const response = await request(app).get("/api/products/hello");
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        message: "Hello from Products Service!",
      });
    });
  });

  describe("GET /api/products", () => {
    it("should return array of products", async () => {
      const response = await request(app).get("/api/products");
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body).toHaveLength(2);
    });

    it("should have correct product properties", async () => {
      const response = await request(app).get("/api/products");
      expect(response.body[0]).toMatchObject({
        id: expect.any(Number),
        name: expect.any(String),
        price: expect.any(Number),
      });
    });
  });

  describe("POST /api/products", () => {
    it("should create a valid product", async () => {
      const validProduct = {
        name: "Test Product",
        price: 99.99,
      };

      const response = await request(app)
        .post("/api/products")
        .send(validProduct);

      expect(response.status).toBe(201);
      expect(response.body).toMatchObject({
        id: expect.any(Number),
        name: validProduct.name,
        price: validProduct.price,
      });
    });

    it("should reject invalid product data", async () => {
      const invalidProduct = {
        name: "",
        price: -1,
      };

      const response = await request(app)
        .post("/api/products")
        .send(invalidProduct);

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty("error");
    });
  });
});
