const request = require("supertest");
const app = require("../server");

describe("Users Service Unit Tests", () => {
  describe("GET /api/users/hello", () => {
    it("should return correct hello message", async () => {
      const response = await request(app).get("/api/users/hello");
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ message: "Hello from Users Service!" });
    });
  });

  describe("GET /api/users", () => {
    it("should return array of users", async () => {
      const response = await request(app).get("/api/users");
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body).toHaveLength(2);
    });

    it("should have correct user properties", async () => {
      const response = await request(app).get("/api/users");
      expect(response.body[0]).toMatchObject({
        id: expect.any(Number),
        name: expect.any(String),
      });
    });
  });
});
