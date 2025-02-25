const express = require("express");
const app = express();

app.get("/api/users/hello", (req, res) => {
  res.json({ message: "Hello from Users Service!" });
});

app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
  ]);
});

const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Users service listening on port ${PORT}`);
  });
}

module.exports = app;
