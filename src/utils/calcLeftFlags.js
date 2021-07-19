const flaggedCells = (board, difficulty) => {
    let mines;

    if (difficulty === "easy") {
        mines = 10;
    } else if (difficulty === "medium") {
        mines = 40;
    } else if (difficulty === "hard") {
        mines = 100;
    }

    const flags = board.reduce((acc, row) => {
        return (
            acc +
            row.reduce((acc, cell) => {
                if (cell.flag) {
                    return acc + 1;
                }
                return acc;
            }, 0)
        );
    }, 0);

    return mines - flags;
};

export default flaggedCells;
