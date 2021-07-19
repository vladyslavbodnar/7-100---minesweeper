const revealCell = (x, y, board, newNonMinesCount) => {
    if (board[x][y].open) return;

    let flipped = [];
    flipped.push(board[x][y]);

    while (flipped.length !== 0) {
        let single = flipped.pop();

        if (!single.open) {
            newNonMinesCount--;
            single.open = true;
            single.flag = false;
        }

        if (single.minesNear !== 0 && !single.bomb) {
            break;
        }

        //Top - Left
        if (single.x > 0 && single.y > 0 && board[single.x - 1][single.y - 1].minesNear === 0 && !board[single.x - 1][single.y - 1].open) {
            flipped.push(board[single.x - 1][single.y - 1]);
        }

        // Bottom - Right
        if (
            single.x < board.length - 1 &&
            single.y < board[0].length - 1 &&
            board[single.x + 1][single.y + 1].minesNear === 0 &&
            !board[single.x + 1][single.y + 1].open
        ) {
            flipped.push(board[single.x + 1][single.y + 1]);
        }

        // Bottom - Left
        if (
            single.x < board.length - 1 &&
            single.y > 0 &&
            board[single.x + 1][single.y - 1].minesNear === 0 &&
            !board[single.x + 1][single.y - 1].open
        ) {
            flipped.push(board[single.x + 1][single.y - 1]);
        }

        // Top - Right
        if (
            single.x > 0 &&
            single.y < board[0].length - 1 &&
            board[single.x - 1][single.y + 1].minesNear === 0 &&
            !board[single.x - 1][single.y + 1].open
        ) {
            flipped.push(board[single.x - 1][single.y + 1]);
        }

        // Single ones

        // Top
        if (single.x > 0 && board[single.x - 1][single.y].minesNear === 0 && !board[single.x - 1][single.y].open) {
            flipped.push(board[single.x - 1][single.y]);
        }

        // Bottom
        if (single.x < board.length - 1 && board[single.x + 1][single.y].minesNear === 0 && !board[single.x + 1][single.y].open) {
            flipped.push(board[single.x + 1][single.y]);
        }

        // Left
        if (single.y > 0 && board[single.x][single.y - 1].minesNear === 0 && !board[single.x][single.y - 1].open) {
            flipped.push(board[single.x][single.y - 1]);
        }

        // Right
        if (single.y < board[0].length - 1 && board[single.x][single.y + 1].minesNear === 0 && !board[single.x][single.y + 1].open) {
            flipped.push(board[single.x][single.y + 1]);
        }

        // Start Revealing Items
        if (single.x > 0 && single.y > 0 && !board[single.x - 1][single.y - 1].open) {
            //Top Left Reveal

            board[single.x - 1][single.y - 1].open = true;
            board[single.x - 1][single.y - 1].flag = false;
            newNonMinesCount--;
        }

        if (single.y > 0 && !board[single.x][single.y - 1].open) {
            // Left Reveal
            board[single.x][single.y - 1].open = true;
            board[single.x][single.y - 1].flag = false;
            newNonMinesCount--;
        }

        if (single.x < board.length - 1 && single.y > 0 && !board[single.x + 1][single.y - 1].open) {
            //Bottom Left Reveal
            board[single.x + 1][single.y - 1].open = true;
            board[single.x + 1][single.y - 1].flag = false;
            newNonMinesCount--;
        }

        if (single.x > 0 && !board[single.x - 1][single.y].open) {
            //Top Reveal
            board[single.x - 1][single.y].open = true;
            board[single.x - 1][single.y].flag = false;
            newNonMinesCount--;
        }

        if (single.x < board.length - 1 && !board[single.x + 1][single.y].open) {
            // Bottom Reveal
            board[single.x + 1][single.y].open = true;
            board[single.x + 1][single.y].flag = false;
            newNonMinesCount--;
        }

        if (single.x > 0 && single.y < board[0].length - 1 && !board[single.x - 1][single.y + 1].open) {
            // Top Right Reveal
            board[single.x - 1][single.y + 1].open = true;
            board[single.x - 1][single.y + 1].flag = false;
            newNonMinesCount--;
        }

        if (single.y < board[0].length - 1 && !board[single.x][single.y + 1].open) {
            //Right Reveal
            board[single.x][single.y + 1].open = true;
            board[single.x][single.y + 1].flag = false;
            newNonMinesCount--;
        }

        if (single.x < board.length - 1 && single.y < board[0].length - 1 && !board[single.x + 1][single.y + 1].open) {
            // Bottom Right Reveal
            board[single.x + 1][single.y + 1].open = true;
            board[single.x + 1][single.y + 1].flag = false;
            newNonMinesCount--;
        }
    }

    return { board, newNonMinesCount };
};

export default revealCell;
