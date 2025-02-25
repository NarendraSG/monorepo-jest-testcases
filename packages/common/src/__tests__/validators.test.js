const validators = require("../validators");

describe("Common Validators", () => {
  describe("isPositiveNumber", () => {
    it("should return true for positive numbers", () => {
      expect(validators.isPositiveNumber(1)).toBe(true);
      expect(validators.isPositiveNumber(100)).toBe(true);
      expect(validators.isPositiveNumber(0.1)).toBe(true);
    });

    it("should return false for non-positive numbers", () => {
      expect(validators.isPositiveNumber(0)).toBe(false);
      expect(validators.isPositiveNumber(-1)).toBe(false);
      expect(validators.isPositiveNumber(-100)).toBe(false);
    });

    it("should return false for non-numbers", () => {
      expect(validators.isPositiveNumber("1")).toBe(false);
      expect(validators.isPositiveNumber(null)).toBe(false);
      expect(validators.isPositiveNumber(undefined)).toBe(false);
      expect(validators.isPositiveNumber({})).toBe(false);
    });
  });

  describe("isNonEmptyString", () => {
    it("should return true for non-empty strings", () => {
      expect(validators.isNonEmptyString("test")).toBe(true);
      expect(validators.isNonEmptyString(" test ")).toBe(true);
    });

    it("should return false for empty strings", () => {
      expect(validators.isNonEmptyString("")).toBe(false);
      expect(validators.isNonEmptyString(" ")).toBe(false);
    });

    it("should return false for non-strings", () => {
      expect(validators.isNonEmptyString(1)).toBe(false);
      expect(validators.isNonEmptyString(null)).toBe(false);
      expect(validators.isNonEmptyString(undefined)).toBe(false);
      expect(validators.isNonEmptyString({})).toBe(false);
    });
  });

  describe("isValidProduct", () => {
    it("should return true for valid products", () => {
      const validProduct = {
        name: "Test Product",
        price: 99.99,
      };
      expect(validators.isValidProduct(validProduct)).toBe(true);
    });

    it("should return false for invalid products", () => {
      expect(validators.isValidProduct({ name: "", price: 100 })).toBe(false);
      expect(validators.isValidProduct({ name: "Test", price: -1 })).toBe(
        false,
      );
      expect(validators.isValidProduct({ name: "Test" })).toBe(false);
      expect(validators.isValidProduct({ price: 100 })).toBe(false);
    });
  });
});
