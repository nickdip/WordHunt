class Board{
    constructor(word){
        this.root = {}
        this.isWord = false
        this.addWord(word)
    }
    
    addWord(word){
        let current = this.root
        
        for(const letter of word){
            if(!current[letter]){
                current[letter] = {}
            }
            current = current[letter]   
        }
        current.isWord = true
    }
    
}


function findWord(board, word) {
<<<<<<< HEAD

=======
    //use dfs
>>>>>>> 9f461df2d373e4866b44f0b3ce62361f6f444641
    const searching = (i, j, node, check) => {

        let ijCurrent = `${i}${j}`;

        if(result || i < 0 || i >= board.length || j < 0 || j >= board[0].length || !node[board[i][j]] || visited.includes(ijCurrent)){
            return
        }
        
        visited.push(ijCurrent)
        check += board[i][j]
        
        node = node[board[i][j]]
        
        if(node.isWord){
           result = check
           return   
        }
        
     searching(i, j+1, node, check)
     searching(i, j-1, node, check)
     searching(i-1, j, node, check)
     searching(i+1, j, node, check)
        
        ijCurrentIndex = visited.indexOf(ijCurrent);
        visited.splice(ijCurrentIndex, 1);
        
    }
    
    const board = new Board(word);

    let result;
    
    const visited = [];
    

    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
            if(board.root[board[i][j]]){
             searching(i, j, board.root, "")
            }
        }
    }
    
    
    return result

};



