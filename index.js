document.addEventListener('DOMContentLoaded', () => {
    // Module 
    const GameBoard = (() => {
        let rows = 3;
        let columns = 3;
        let board = [];
    
        for (let i = 0; i < rows; i++) {
            board[i] = []
            for (let j = 0; j < columns; j++) {
                board[i].push("");
            }
        } 
        return {board}
    }) ();
    
    
    // factory function
    const Player = (name, marker) => {
        const sayHello = () => console.log(`Hello! my name is ${name}`);
        return { name, marker, sayHello };
    };
    
    
    const addMarker = (row, column, marker, board) => {
        board[row][column] = marker;   
        // TODO
    }

    
    const displayController = () => {
        // take array and show it on the display
        const gameArea = document.getElementById("gameArea");
        const gameCells = document.querySelectorAll('div.gameCell');
        const board = GameBoard.board;
    
        board.forEach((subArray, rowIndex) => {
            subArray.forEach((element, colIndex) => {
                // calculate the index for the div element
                const divIndex = rowIndex * 3 + colIndex;

                // set the value form the array to the div element
                gameCells[divIndex].textContent = element;
            })
        })
    };


    // add markers to a specific spot 
    const game = () => {
        // have a board set up
        const board = GameBoard.board;

        const gameCells = document.querySelectorAll('.gameCell');

        const p1 = Player("s", "X");
        const p2 = Player('r', "O");

        // move count
        let movesCount = 0;
        let turnInfo = document.getElementById('turnInfo');
        turnInfo.textContent = "Turn: Player 1"

        gameCells.forEach((cell) => {
            cell.addEventListener('click', () => {
                
                let row = cell.dataset.row;
                let column = cell.dataset.column;

                // if it is a valid move then increment moveCount

                if (!board[row][column]) {
                    movesCount++;
                    turnInfo.textContent = "Turn: Player 1"
                    if (movesCount % 2 != 0) {
                        turnInfo.textContent = "Turn: Player 2"
                        board[row][column] = p1.marker;

                        // checking if player wins
                        let winner = checkWinner();
                        displayController();

                        if (winner == "X") {
                            setTimeout(displayWinner("Player 1"), 3000) ;
                        } else if (winner == "O") {
                            setTimeout(displayWinner("Player 2"), 3000) 
                        }

                        if (movesCount == 9) {
                            displayWinner();
                        }
                    } else {
                        turnInfo.textContent = "Turn: Player 1"
                        board[row][column] = p2.marker;
                        console.log(checkWinner());
                        displayController();

                        let winner = checkWinner();
                        if (winner == "X") {
                            setTimeout(displayWinner("Player 1"), 3000) ;
                        } else if (winner == "O") {
                            setTimeout(displayWinner("Player 2"), 3000) 
                        }

                        if (movesCount == 9) {
                            displayWinner();
                        }


                    }
                }
                
            })
        })
    };

    const checkWinner = () => {
            const board = GameBoard.board;

            for (let i = 0; i < 3; i++) {
                // check rows
                if (board[i][0] === board[i][1] && board[i][0] === board[i][2] && board[i][0] !== "") {
                    return board[i][0];
                }

                // check column
                if (board[0][i] === board[1][i] && board[0][i] === board[2][i] && board[0][i] !== "") {
                    return board[0][i];
                }

                // check diagonal
                if (board[0][0] === board[1][1] && board[0][0] === board[2][2] || board[0][2] === board[1][1] && board[0][2] && board[0][2] !== "" ) {
                    return board[1][1]
                }          
            }

            return null;
    }

    const displayWinner = (winner) => {
        const result = document.getElementById('result');
        const container = document.querySelector('.container');
        const container2 = document.getElementById('container2');

        if (winner) {
            container.classList.add('background');
    
            container2.style.display = "block";
            container2.classList.add('content')
            result.textContent = `${winner} wins!`
            result.classList.add('final')
        } else {
            container.classList.add('background');
    
            container2.style.display = "block";
            container2.classList.add('content')
            result.textContent = `Tie!`
            result.classList.add('final')
        }


    }


    const restartGame = (() => {
        const btns = document.querySelectorAll('.startBtn');

        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                location.reload();
            })
        })
    }) ();


    game();
    displayController();
})



