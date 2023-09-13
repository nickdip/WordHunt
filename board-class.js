
class findWord {
    #remainingWord
    #visited
    #wordTrack
    constructor(board, word) {
        this.word = word 
        this.board = board
        this.#remainingWord = word //how much left of the word there is to check
        this.#visited = []  //keeps track of visited spaces
        this.ijIndex = [] //keeps track of the index of searched letters
        this.#wordTrack = "" //what letters we have currently
    }

    searchBoard() {

        const searching = (i, j) => {

            if (this.#wordTrack === this.word) return true
            

            let ijCurrent = `${i}${j}`

            if (i < 0 || i >= this.board.length || j < 0 || j >= this.board[0].length || this.#visited.includes(ijCurrent)){
                return false
            }

            this.#visited.push(ijCurrent)
            const currentLetter = this.#remainingWord[0]

            if (this.board[i][j] != currentLetter) {
                this.#visited.pop()
                return false 
            }

            this.#remainingWord = this.#remainingWord.slice(1)
            this.#wordTrack += currentLetter
            this.ijIndex.push([i, j])

            for (let const1 = -1; const1 <= 1; const1++) {
                for (let const2 = -1; const2 <= 1; const2++) {
                    if (!(const1 == 0 && const2 == 0) && searching(i + const1, j + const2)) return true
                }
            }

            this.#visited.pop()
            this.ijIndex.pop()
            this.#wordTrack = this.#wordTrack.slice(0, -1)
            this.#remainingWord = currentLetter + this.#remainingWord
            


        }

        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[0].length; j++) {
                if (searching(i, j)) return true

        }}

    return false
    }



}

module.exports = { findWord }