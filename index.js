// Module 
const GameBoard = (() => {
    let rows = 3;
    let columns = 3;
    let board = [
        ["X", "X", "X"],
        ["O", "O", "X"],
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
}

const game = (() => {
    
})();


