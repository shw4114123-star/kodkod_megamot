import { filterEven, toTitleCase, average, max, isEven } from "./math.js"
import assert from "node:assert/strict"
import { describe, it, test } from "node:test"



describe("math unit test", () => {
  test("isEven function return true if num is even", () => {
    assert.strictEqual(isEven(4), true)
  })
  test("isEven function return false if num is not even", () => {
    assert.strictEqual(isEven(3), false)
  })
  test("max function return the larger number", () => {
    assert.strictEqual(max(2, 3), 3)
  })
  test("max function return the larger number", () => {
    assert.strictEqual(max(3, 2), 3)
  })
  test("max function return error if one of the args is not a number", () => {
    assert.throws(() => max("a", 3), { message: "args must be a number" })
  })
  test("average function return the average of list of numbers", () => {
    assert.strictEqual(average([2, 4]), 3)
  })
  test("average function return error if one of the args is not a number", () => {
    assert.throws(() => average(["2", 4]), { message: "args must be a number" })
  })
  test("toTitleCase function return the string with the first letter as upper one", () => {
    assert.strictEqual(toTitleCase("hello world"), "Hello World")
  })
  test("filterEven function return the all even numbers", () => {
    assert.deepEqual(filterEven([2, 3, 4, 5, 6]), [2, 4, 6])
  })
  test("filterEven function return error if one of the args is not a number", () => {
    assert.throws(() => filterEven(["2", 4]), { message: "args must be a number" })
  })
})




