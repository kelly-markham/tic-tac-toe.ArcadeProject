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
});
//const isGameFinished = () => _gameFinished; //check

const changeMode = (newMode) => {
    _mode = newMode;
    _gameFinished = false;
};

const getMode = () => {
    return _mode;
}
//  }; //check

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
        winnerCalled.textContent = `${.getCurrentPlayer().retrieveName()} is the winner!`;
        gameOver = true;
        //displayController.removeTilesEventListener();//
    };
}; 

const checkForTie = () => {
    gameBoardState = gameBoard.boardState();
    winnerCalled = document.querySelector('.winningGameMsg');
}

