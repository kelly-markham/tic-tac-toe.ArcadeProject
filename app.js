let gameBoard = (() => {
    let board = [
        [null,null,null,
        null,null,null,
        null,null,null]
    ];
    let boardState = () => {
        let currentBoard = board;
        return currentBoard;
    };
    let updateBoard = (mark, index) =>{
        board[index] = mark;  //
    };
    let resetBoard = () => {
        return board;
    };
    return boardState, updateBoard, resetBoard;
});

//reset button

//players
let player = () => {
    let playerName = '';
    let playerMark = 'x';
    let changeName = (name) => {
        playerName = name;
    };
    let changePlayerMark = (mark) => {
        playerMark = mark;
    };
    let retrieveName = () => playerName;
    let retrieveMark = () => playerMark;
    return retrieveName, retrieveMark, changeName, changePlayerMark
};

const setGame = (() => {
    const player1 = player();
    const player2 = player();
    const computer = player();
    let gameOver = false;
    let gameMode = "2Players";
    player1.changeName("names");
    player1.changePlayerMark("x");
    player2.changePlayerMark("o");
    computer.changeName("AI");
    computer.changePlayerMark("o");
    let currentPlayer = player1;
    const getCurrentPlayer = () => {
        return currentPlayer;
    };
    const setPlayersName = () => {
        const player1Info = document.querySelector("#player1");
        const player2Info = document.querySelector("#player2");
        player1.changeName(player1Info.value);
        player2.changeName(player2Info.value);
    };
    const changeCurrentPlayer = () => {
        if (gameMode == "2Players") {
            if (currentPlayer == player1){
                currentPlayer = player2;
            } 
            else currentPlayer = player1;
        } 
        else {
            if (currentPlayer == player1){
                currentPlayer = computer;
            } else currentPlayer = player1;
        }
    };
}); //?????????? respond to lower return all functions comment down below

    const isGameFinished = () => gameOver; //check

    const changeMode = (newMode) => {
        gameMode = newMode;
        gameOver = false;
    };

    const getMode = () => {
        return gameMode;
    }; //check

    const checkForWin = () => {
        let gameBoardState = gameBoard.boardState();
        let presentPlayer = currentPlayer.retrieveMark();
    if (
        (gameBoardState[0] == presentPlayer && gameBoardState[1] == presentPlayer && gameBoardState[2] == presentPlayer)
        || (gameBoardState[3] == presentPlayer && gameBoardState[4] == presentPlayer && gameBoardState[5] == presentPlayer)
        || (gameBoardState[6] == presentPlayer && gameBoardState[7] == presentPlayer && gameBoardState[8] == presentPlayer)
        || (gameBoardState[0] == presentPlayer && gameBoardState[3] == presentPlayer && gameBoardState[6] == presentPlayer)
        || (gameBoardState[1] == presentPlayer && gameBoardState[4] == presentPlayer && gameBoardState[7] == presentPlayer)
        || (gameBoardState[2] == presentPlayer && gameBoardState[5] == presentPlayer && gameBoardState[8] == presentPlayer)
        || (gameBoardState[0] == presentPlayer && gameBoardState[0] == presentPlayer && gameBoardState[0] == presentPlayer)
        || (gameBoardState[0] == presentPlayer && gameBoardState[4] == presentPlayer && gameBoardState[8] == presentPlayer)
        || (gameBoardState[2] == presentPlayer && gameBoardState[4] == presentPlayer && gameBoardState[6] == presentPlayer)
    ){
        let winnerCalled = document.querySelector('.winningGameMsg');
        winnerCalled.textContent = `${getCurrentPlayer().retrieveName()} is the winner!`;
        gameOver = true;
        //displayController.removeTilesEventListener();//
    };
}; 

    const checkForTie = () => {
        gameBoardState = gameBoard.boardState();
        winnerCalled = document.querySelector('.winningGameMsg');
        if (winnerCalled.textContent == '' &&  gameBoardState.every((element) => element == 'x' || element == 'o')){
            winnerCalled.textContent = 'Draw!';
        }    
    };
        //?? not sure about the tie concept and .every

//playing against robot
    const vsRobot = () => {
    let clearCells = [];
    for (let i = 0; i < 9; i++){
        if (gameBoardState = gameBoard.boardState() == '');{
            clearCells.push(i);
        }
    }
    return clearCells[Math.floor(Math.random() * clearCells.length)];
};
//!!!! return //this should return all of the factors that i inserted/created from above
//should setGame be one big arrow function?


const gameWorks = (() => {
    let chooseMode = document.querySelectorAll("button[name = mode]");
    let startGame = document.querySelector('.startButton');
    let resetGame = document.querySelector('.resetButton');
    let boardCells = document.querySelectorAll('.cell'); //

const clickGameMode = () => {
    for(let chosenMode of chooseMode){
        if (chosenMode.clicked){
            setGame.changeMode(chosenMode.value);
            break;
        }
    }
};

//start button event listener
const startGameButton = () => {
    setGame.setPlayersName();
    clickGameMode(); 
}
})();

// control everything on display
