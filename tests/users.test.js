const request = require("supertest");
const app = require("../packages/users-service/src/server");

describe("Users Service", () => {
  it("should return hello message", async () => {
    const response = await request(app).get("/api/users/hello");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Hello from Users Service!" });
  });

  it("should return list of users", async () => {
    const response = await request(app).get("/api/users");
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(2);
    expect(response.body[0]).toHaveProperty("name");
  });
});
