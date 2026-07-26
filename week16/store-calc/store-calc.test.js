import { formatPrice, validatePrice, calculateCartTotal, applyTax, calculateDiscount } from "./store-calc.js"
import assert from "node:assert/strict"
import { describe, it, test } from "node:test"


describe("calculateDiscount unit test", () => {
  test("calculateDiscount function return price after percent", () => {
    assert.strictEqual(calculateDiscount(100, 20), 80)
  })
  test("calculateDiscount function return the price if percent is 0", () => {
    assert.strictEqual(calculateDiscount(100, 0), 100)
  })
  test("calculateDiscount function return error if one of the args is not a number", () => {
    assert.throws(() => calculateDiscount("100", 20), { message: "the args must be numbers" })
  })
})

describe("applyTax unit test", () => {
  test("applyTax function return price after taxRate", () => {
    assert.strictEqual(applyTax(100, 17), 117)
  })
  test("applyTax function return 0 if price is 0", () => {
    assert.strictEqual(applyTax(0, 17), 0)
  })
  test("applyTax function return error if one of the args is not a number", () => {
    assert.throws(() => applyTax("100", 17), { message: "the args must be numbers" })
  })
})

describe("calculateCartTotal unit test", () => {
  test("calculateCartTotal function return sum of all products", () => {
    assert.strictEqual(calculateCartTotal([
      {
        "price": 150,
        "quantity": 2
      },
      {
        "price": 20,
        "quantity": 10
      }
    ]
    ), 500)
  })
  test("calculateCartTotal function return error if the list is empty", () => {
    assert.throws(() => calculateCartTotal([]), { message: "the list is empty" })
  })
})

describe("validatePrice unit test", () => {
  test("validatePrice function return error if the price is not a number", () => {
    assert.throws(() => validatePrice("100"), { message: "the price must be a number" })
  })
  test("validatePrice function return error if the price is less then 0", () => {
    assert.throws(() => validatePrice(-23), { message: "the price must be larger that 0" })
  })
  test("validatePrice function return a message if price is 0", () => {
    assert.strictEqual(validatePrice(0), "free item")
  })
  test("validatePrice function return true if price is larger than 0", () => {
    assert.strictEqual(validatePrice(1), true)
  })
})

describe("formatPrice unit test", () => {
  test("formatPrice function return error if the price is not a number", () => {
    assert.throws(() => formatPrice("100"), { message: "the price must be a number" })
  })
  test("formatPrice function return the amount with tow numbers after the perioed", () => {
    assert.strictEqual(formatPrice(100), `₪100.00`)
  })
  test("formatPrice function return the amount with tow numbers after the perioed", () => {
    assert.strictEqual(formatPrice(100), `₪100.00`)
  })
  test("formatPrice function return the amount with tow numbers after the perioed", () => {
    assert.equal(formatPrice(153.996), "₪154.00")
  })
})

