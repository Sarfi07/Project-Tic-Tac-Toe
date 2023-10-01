document.addEventListener('DOMContentLoaded', () => {
    // Module 
    const GameBoard = (() => {
        let rows = 3;
        let columns = 3;
        let board = [
            ["X", "X", "X"],
            ["O", "O", "O"],
            ["X", "X", "X"]
        ];
    
        // for (let i = 0; i < rows; i++) {
        //     board[i] = []
        //     for (let j = 0; j < columns; j++) {
        //         board[i].push(0);
        //     }
        // } 
        return {board}
    }) ();
    
    
    // factory function
    const Player = (name, marker, move) => {
        const sayHello = () => console.log(`Hello! my name is ${name}`);
        return { name, marker, move, sayHello };
    };
    
    
    const position = (row, column) => {
        GameBoard.board[row][column] = 1;   
        // TODO
    }
    
    const displayController = (() => {
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
    }) ();
})



