
const { checkWord } = require("../words/searchDictionary")
const { readDictionary } = require("../words/createdics")

let dictionary
beforeAll( async () => {
    dictionary = await readDictionary()
    return dictionary
    }
)




describe("checkWords", () => {

    test("checkWord function exists", () => {
        expect(typeof checkWord).toBe("function")
    })

    test("checkWords returns false when entering an empty string", () => {
        const output = checkWord("", dictionary)
        expect(output).toBe(false)

        
    })

    test("checkWords returns false when entering a one-letter word", () => {
        const output = checkWord("a", dictionary)
        expect(output).toBe(false)

    })

    test("checkWords returns false when entering an invalid two-letter word", () => {

        const output = checkWord("xt", dictionary)
        expect(output).toBe(false)

    })

    test("checkWords returns true when entering an valid two-letter word", () => {

        const output = checkWord("as", dictionary)
        expect(output).toBe(false)

    })

    test("checkWords returns true when entering an valid nine-letter word", () => {
        const output = checkWord("buzzkills", dictionary)
        expect(output).toBe(false)

    })

    test("checkWords returns false when entering an invalid nine-letter word", () => {
        const output = checkWord("zzzzzzzzz", dictionary)
        expect(output).toBe(false)

    })

    test("checkWords returns false when entering an invalid word with valid subwords", () => {
        const output = checkWord("andw", dictionary)
        expect(output).toBe(false)

    })

})