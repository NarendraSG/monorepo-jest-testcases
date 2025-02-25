const express = require("express");
const { isValidProduct } = require("@monorepo-demo/common");
const app = express();

app.use(express.json());

app.get("/api/products/hello", (req, res) => {
  res.json({ message: "Hello from Products Service!" });
});

app.get("/api/products", (req, res) => {
  res.json([
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Smartphone", price: 699 },
  ]);
});

app.post("/api/products", (req, res) => {
  const product = req.body;

  if (!isValidProduct(product)) {
    return res.status(400).json({ error: "Invalid product data" });
  }

  // Mock product creation
  const newProduct = {
    id: Date.now(),
    ...product,
  };

  res.status(201).json(newProduct);
});

const PORT = process.env.PORT || 3002;

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Products service listening on port ${PORT}`);
  });
}

module.exports = app;
