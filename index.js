
// factory function with IIFE
const newBoard = (function createGameBoard() {
    const boardArray = []
    const [row, column]= [3, 3];
    
    for (let i = 0; i < row; i++) {
        boardArray[i] = [];

        for (let j = 0; j < column; j++) {
            boardArray[i].push('');
        }
    }

    return {boardArray}
}) ();


function checkWin(boardArray) {

    for (let i = 0; i < 3; i++) {
        let winner;
        
        // check row
        if (boardArray[i][0] == boardArray[i][1] && boardArray[i][1] == boardArray[i][2] && boardArray[i][2] != "") {
            return  boardArray[i][1];
        }

        // check column
        else if (boardArray[0][i] == boardArray[1][i] && boardArray[1][i] == boardArray[2][i] && boardArray[2][i] != "") {
            return boardArray[1][i];
        }

        // check diagonals
        // 00 01 02
        // 10 11 12
        // 20 21 22

        else if (boardArray[0][0]  == boardArray[1][1] && boardArray[2][2] == boardArray[1][1] && boardArray[1][1] != "") {
            return boardArray[1][1];
        }

        else if (boardArray[0][2] == boardArray[1][1] && boardArray[1][1] == boardArray[2][0] && boardArray[1][1] != "") {
            return boardArray[1][1];
        }
    }

}

function takeMarkers() {
    // take selected marker from players
    // TODO

    const playerOne = "X";
    const playerTwo = "O";


    return {playerOne, playerTwo}
}

// full rouund

function round() {
    const currentBoard = newBoard.boardArray;


    // take inputs from players
    const {playerOne, playerTwo} = takeMarkers();
    let movesCount = 0;
    
    const cells = document.querySelectorAll('.gameCell');
    
    let nextMove;
    let result;

    cells.forEach((cell, index) => {

        cell.addEventListener('click', () => {
            let row_index = Math.floor(index / 3);
            let column_index = index % 3;
            
            
            
            if (nextMove == playerOne || !nextMove) {
                nextMove = playerOne;
                console.log("CurrentMove: Player One")
                currentBoard[row_index][column_index] = playerOne;
                cell.textContent = playerOne
                
                movesCount += 1
                if (checkWin(currentBoard)) {
                    result = checkWin(currentBoard)
                    console.log(currentBoard)
                    showResult(playerOne)
                }
                else if (movesCount == 9 && !checkWin(currentBoard)) {
                    showResult("Tie!")
                    
                }
                
                
                nextMove = playerTwo;

            }
            else {
                console.log("CurrentMove: Player Two")
                currentBoard[row_index][column_index] = playerTwo;
                cell.textContent = playerTwo;
                movesCount += 1;
                if (checkWin(currentBoard)) {
                    result = checkWin(currentBoard);
                    showResult(playerTwo)
                }

                else if (movesCount == 9 && !checkWin(currentBoard)) {
                    showResult("Tie!")
                }
                nextMove = playerOne;
                

            }
            
            
        })
    })
}


function showResult(result) {
    const d = document.getElementById('modal');
    const resultText  = document.getElementById('resultText');


    d.showModal();
    if (result != "Tie!") {
        resultText.textContent = `${result} wins!`
    }
    else {
        resultText.textContent = result;
    }
}


function restartGame() {
    // restart blank gameBoard

    const btns = document.querySelectorAll('.restartBtn');
    
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            location.reload()
        })
    })
    
}

round();
restartGame();
