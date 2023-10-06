const readline = require('node:readline');

const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

const { findWord } = require('./findWord')
const { readDictionary } = require("./words/createdics")
const { checkWord } = require("./findWords")

async function play() {

    function askQuestions() {
        rl.question('Word: ', (word) => {
            word = word.toUpperCase()
            let result = checkWord(word)
            return askQuestions()
        })
    }
    
    dictionary = await readDictionary()
    board = [["C", "O", "E"], ["I", "K", "M"], ["S", "T", "O"]]

    const testFindWord = new findWord(board, dictionary)
    //const possibleWords = testFindWord.generateWords()

    setTimeout(() => {
        rl.close()
    }, 30000)


    askQuestions()


    
}



play()

// {
//     '3':     {
//         CIS: [ [ 0, 0 ], [ 1, 0 ], [ 2, 0 ] ],
//         OKE: [ [ 2, 2 ], [ 1, 1 ], [ 0, 2 ] ],
//         ICK: [ [ 1, 0 ], [ 0, 0 ], [ 1, 1 ] ],
//         ITS: [ [ 1, 0 ], [ 2, 1 ], [ 2, 0 ] ],
//         KOI: [ [ 1, 1 ], [ 0, 1 ], [ 1, 0 ] ],
//         KIS: [ [ 1, 1 ], [ 1, 0 ], [ 2, 0 ] ],
//         KIT: [ [ 1, 1 ], [ 1, 0 ], [ 2, 1 ] ],
//         MOC: [ [ 1, 2 ], [ 0, 1 ], [ 0, 0 ] ],
//         MOT: [ [ 1, 2 ], [ 2, 2 ], [ 2, 1 ] ],
//         SIC: [ [ 2, 0 ], [ 1, 0 ], [ 0, 0 ] ],
//         SIT: [ [ 2, 0 ], [ 1, 0 ], [ 2, 1 ] ],
//         SKI: [ [ 2, 0 ], [ 1, 1 ], [ 1, 0 ] ],
//         TIC: [ [ 2, 1 ], [ 1, 0 ], [ 0, 0 ] ],
//         TIS: [ [ 2, 1 ], [ 1, 0 ], [ 2, 0 ] ],
//         TSK: [ [ 2, 1 ], [ 2, 0 ], [ 1, 1 ] ],
//         TOM: [ [ 2, 1 ], [ 2, 2 ], [ 1, 2 ] ]
//       },
//     '4': {
//         COKE: [ [ 0, 0 ], [ 0, 1 ], [ 1, 1 ], [ 0, 2 ] ],
//         COME: [ [ 0, 0 ], [ 0, 1 ], [ 1, 2 ], [ 0, 2 ] ],
//         CIST: [ [ 0, 0 ], [ 1, 0 ], [ 2, 0 ], [ 2, 1 ] ],
//         KOIS: [ [ 1, 1 ], [ 0, 1 ], [ 1, 0 ], [ 2, 0 ] ],
//         KIST: [ [ 1, 1 ], [ 1, 0 ], [ 2, 0 ], [ 2, 1 ] ],
//         KITS: [ [ 1, 1 ], [ 1, 0 ], [ 2, 1 ], [ 2, 0 ] ],
//         MOCK: [ [ 1, 2 ], [ 0, 1 ], [ 0, 0 ], [ 1, 1 ] ],
//         MOKE: [ [ 1, 2 ], [ 2, 2 ], [ 1, 1 ], [ 0, 2 ] ],
//         MOTS: [ [ 1, 2 ], [ 2, 2 ], [ 2, 1 ], [ 2, 0 ] ],
//         SICK: [ [ 2, 0 ], [ 1, 0 ], [ 0, 0 ], [ 1, 1 ] ],
//         SIKE: [ [ 2, 0 ], [ 1, 0 ], [ 1, 1 ], [ 0, 2 ] ],
//         SKIT: [ [ 2, 0 ], [ 1, 1 ], [ 1, 0 ], [ 2, 1 ] ],
//         TICK: [ [ 2, 1 ], [ 1, 0 ], [ 0, 0 ], [ 1, 1 ] ],
//         TIKE: [ [ 2, 1 ], [ 1, 0 ], [ 1, 1 ], [ 0, 2 ] ],
//         TOKE: [ [ 2, 1 ], [ 2, 2 ], [ 1, 1 ], [ 0, 2 ] ],
//         TOME: [ [ 2, 1 ], [ 2, 2 ], [ 1, 2 ], [ 0, 2 ] ],
//         OTIC: [ [ 2, 2 ], [ 2, 1 ], [ 1, 0 ], [ 0, 0 ] ]
//       },
//     '5':     {
//         MOCKS: [ [ 1, 2 ], [ 0, 1 ], [ 0, 0 ], [ 1, 1 ], [ 2, 0 ] ],
//         MOIST: [ [ 1, 2 ], [ 0, 1 ], [ 1, 0 ], [ 2, 0 ], [ 2, 1 ] ],
//         SICKO: [ [ 2, 0 ], [ 1, 0 ], [ 0, 0 ], [ 1, 1 ], [ 2, 2 ] ],
//         STICK: [ [ 2, 0 ], [ 2, 1 ], [ 1, 0 ], [ 0, 0 ], [ 1, 1 ] ],
//         STOKE: [ [ 2, 0 ], [ 2, 1 ], [ 2, 2 ], [ 1, 1 ], [ 0, 2 ] ],
//         TICKS: [ [ 2, 1 ], [ 1, 0 ], [ 0, 0 ], [ 1, 1 ], [ 2, 0 ] ]
//        },
//     '6': {},
//     '7': {},
//     '8': {},
//     '9': {}
//   })