const createBoard = (difficulty) => {
    let board = [];

    let size;
    let mines;
    let emptyCellsLeft;

    if (difficulty === "easy") {
        size = 10;
        mines = 10;
        emptyCellsLeft = size * size - mines;
    } else if (difficulty === "medium") {
        size = 20;
        mines = 40;
        emptyCellsLeft = size * size - mines;
    } else if (difficulty === "hard") {
        size = 30;
        mines = 100;
        emptyCellsLeft = size * size - mines;
    }

    for (let x = 0; x < size; x++) {
        const row = [];
        for (let y = 0; y < size; y++) {
            row.push({ x, y, bomb: false, flag: false, open: false, minesNear: 0 });
        }
        board.push(row);
    }

    // generate mines
    let minesCount = mines;
    while (minesCount !== 0) {
        let x = Math.floor(Math.random() * size);
        let y = Math.floor(Math.random() * size);

        if (board[x][y].bomb === false) {
            board[x][y].bomb = true;
            minesCount--;
        }
    }

    // assign to each cell number of how many mines near it
    for (let tempX = 0; tempX < size; tempX++) {
        for (let tempY = 0; tempY < size; tempY++) {
            if (board[tempX][tempY].bomb) {
                continue;
            }

            // Top
            if (tempX > 0 && board[tempX - 1][tempY].bomb) {
                board[tempX][tempY].minesNear++;
            }

            // Top Right
            if (tempX > 0 && tempY < size - 1 && board[tempX - 1][tempY + 1].bomb) {
                board[tempX][tempY].minesNear++;
            }

            // Right
            if (tempY < size - 1 && board[tempX][tempY + 1].bomb) {
                board[tempX][tempY].minesNear++;
            }

            // Botoom Right
            if (tempX < size - 1 && tempY < size - 1 && board[tempX + 1][tempY + 1].bomb) {
                board[tempX][tempY].minesNear++;
            }

            // Bottom
            if (tempX < size - 1 && board[tempX + 1][tempY].bomb) {
                board[tempX][tempY].minesNear++;
            }

            // Bottom Left
            if (tempX < size - 1 && tempY > 0 && board[tempX + 1][tempY - 1].bomb) {
                board[tempX][tempY].minesNear++;
            }

            // LEft
            if (tempY > 0 && board[tempX][tempY - 1].bomb) {
                board[tempX][tempY].minesNear++;
            }

            // Top Left
            if (tempX > 0 && tempY > 0 && board[tempX - 1][tempY - 1].bomb) {
                board[tempX][tempY].minesNear++;
            }
        }
    }

    return { board, emptyCellsLeft };
};

export default createBoard;
