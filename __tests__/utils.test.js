
const { randomArrayElement, keysStartingWith, wordScore } = require('../words/utils');


describe("wordScore", () => {
    test("wordScore function exists", () => {
        expect(typeof wordScore).toBe("function")
    })

    test("wordScore returns 0 when entering an empty string", () => {
        const output = wordScore("")
        expect(output).toBe(0)
    })

    test("wordScore returns 1 when entering a one-letter word with a score of 1", () => {
        const output = wordScore("a")
        expect(output).toBe(1)
    })
    
    test("wordScore returns 2 when entering a one-letter word with a score of 2", () => {
        const output = wordScore("d")
        expect(output).toBe(2)
    })

    test("wordScore returns 2 when entering a two-letter word with a score of 2", () => {
        const output = wordScore("at")
        expect(output).toBe(2)
    })

    test("wordScore returns 8 when entering a five-letter word with a score of 8", () => {
        const output = wordScore("hello")
        expect(output).toBe(8)
    })

    test("wordScore handles uppercase letters", () => {
        const output = wordScore("HELLO")
        expect(output).toBe(8)
    })
})