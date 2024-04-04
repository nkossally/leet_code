/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    let count = 0;
    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]]

    const isOnBoard = (x, y) =>{
        return x >= 0 && x < board.length && y >= 0 && y < board[0].length;

    }
    const handleX = (x, y) =>{
        board[x][y] = "."
        dirs.forEach(dir =>{
            const x2 = x + dir[0]
            const y2 = y + dir[1]
            if(isOnBoard(x2, y2) && board[x2][y2] === "X"){
                handleX(x2, y2)
            }
            
        })
    }

    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
            if(board[i][j] === "X"){
                count++
                handleX(i, j)
            }
        }
    }


    console.log(count)
    return count
}

const board =
[["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]]
const board2 = [["."]]


countBattleships(board)
countBattleships(board2)