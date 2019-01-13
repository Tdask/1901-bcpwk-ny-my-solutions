// YOUR CODE BELOW
let ticTacToe = {
    board: [[null,null,null],
            [null,null,null],
            [null,null,null]],
    move: function(char, rowNum, colNum){
        if (this.board[rowNum][colNum] === null){
        this.board[rowNum].splice(colNum, 1, char)
        return this.board;
        }
    },
    clear: function(){
        for (let i = 0; i < 3; i++){
            for (let j =0; j < 3; j++){
                this.board[i][j] = null;
            }
        } return this.board;
    }
  
}

