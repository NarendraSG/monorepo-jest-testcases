const request = require("supertest");
const app = require("../packages/products-service/src/server");

describe("Products Service", () => {
  it("should return hello message", async () => {
    const response = await request(app).get("/api/products/hello");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Hello from Products Service!" });
  });

  it("should return list of products", async () => {
    const response = await request(app).get("/api/products");
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(2);
    expect(response.body[0]).toHaveProperty("price");
  });
});
