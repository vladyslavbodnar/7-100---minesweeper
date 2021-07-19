const revealBombs = (board) => {
    board = board.map((row) =>
        row.map((cell) => {
            if (cell.bomb && !cell.open) {
                return { ...cell, open: true };
            }
            return cell;
        })
    );

    return board;
};

export default revealBombs;
