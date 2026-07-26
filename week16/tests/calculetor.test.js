import { add, isEven } from "../calculetor.js";
import assert from "node:assert/strict"
import { describe, it, test } from "node:test"



describe("calculeto unit test", () => {
    // test("add function returns sum of tow args", () => {
    //     const res = add(3, 5)
    //     assert.equal(res, 8)
    // })
    // test("function add throws error if one args not number", () => {
    //     assert.throws(() => add("a", 3), { message: "args nust be a number" })
    // })
    // it.todo("check multypy return sum of args")
    test("isEven function returns true if is even", () => {
        assert.strictEqual(isEven(4), true)
    })
    test("isEven function returns false if is not even", () => {
        assert.strictEqual(isEven(3), false)
    })
    test("isEven function returns true if is zero", () => {
        assert.strictEqual(isEven(0), true)
    })
})