
const { checkWord, binarySearch } = require("../findWords")
const { readDictionary } = require("../words/createdics")


describe("checkWords", () => {

    test("checkWord function exists", () => {
        expect(typeof checkWord).toBe("function")
    })

    test("checkWords returns false when entering an empty string", () => {
        const readDict = async () => { 
            let dictionary = await readDictionary()
            return dictionary
        }
        const output = checkWord("", readDict())
        expect(output).toBe(false)

        
    })

    test("checkWords returns false when entering a one-letter word", () => {
        const readDict = async () => { 
            let dictionary = await readDictionary()
            return dictionary
        }
        const output = checkWord("a", readDict())
        expect(output).toBe(false)

    })

    test("checkWords returns false when entering an invalid two-letter word", () => {
        const readDict = async () => { 
            let dictionary = await readDictionary()
            return dictionary
        }
        const output = checkWord("xt", readDict())
        expect(output).toBe(false)

    })

    test("checkWords returns true when entering an valid two-letter word", () => {
        const readDict = async () => { 
            let dictionary = await readDictionary()
            return dictionary
        }
        const output = checkWord("as", readDict())
        expect(output).toBe(false)

    })

    test("checkWords returns true when entering an valid nine-letter word", () => {
        const readDict = async () => { 
            let dictionary = await readDictionary()
            return dictionary
        }
        const output = checkWord("buzzkills", readDict())
        expect(output).toBe(false)

    })

    test("checkWords returns false when entering an invalid nine-letter word", () => {
        const readDict = async () => { 
            let dictionary = await readDictionary()
            return dictionary
        }
        const output = checkWord("zzzzzzzzz", readDict())
        expect(output).toBe(false)

    })

    test("checkWords returns false when entering an invalid word with valid subwords", () => {
        const readDict = async () => { 
            let dictionary = await readDictionary()
            return dictionary
        }
        const output = checkWord("andw", readDict())
        expect(output).toBe(false)

    })

})