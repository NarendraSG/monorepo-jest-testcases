/**
 * Common validation functions used across services
 */

const validators = {
  /**
   * Validates if the input is a positive number
   */
  isPositiveNumber: (value) => {
    return typeof value === "number" && value > 0;
  },

  /**
   * Validates if the input is a non-empty string
   */
  isNonEmptyString: (value) => {
    return typeof value === "string" && value.trim().length > 0;
  },

  /**
   * Validates product object structure
   */
  isValidProduct: (product) => {
    return (
      product &&
      validators.isNonEmptyString(product.name) &&
      validators.isPositiveNumber(product.price)
    );
  },

  /**
   * Validates user object structure
   */
  isValidUser: (user) => {
    return (
      user &&
      validators.isNonEmptyString(user.name) &&
      validators.isNonEmptyString(user.email)
    );
  },
};

module.exports = validators;
