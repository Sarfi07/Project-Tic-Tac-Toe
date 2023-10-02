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
                        displayController();
                    } else {
                        turnInfo.textContent = "Turn: Player 1"
                        board[row][column] = p2.marker;
                        displayController();
                    }

                }
                
            })
        })
    }

    game();
    displayController();
})



