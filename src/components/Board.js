import Cell from "./Cell";
import changeFlag from "../utils/changeFlag";
import revealCell from "../utils/revealCell";
import revealBombs from "../utils/revealBombs";
import { useEffect } from "react";
import calcLeftFlags from "../utils/calcLeftFlags";

const Board = ({ board, setBoard, gameStatus, setGameStatus, emptyCellsLeft, setEmptyCellsLeft, setFlagsLeft, difficulty }) => {
    const flagCell = (cell) => {
        if (!gameStatus || cell.open) return;
        let result = changeFlag(cell.x, cell.y, board);
        setBoard(result);
    };

    const clickCell = (cell) => {
        // if game has ended
        if (!gameStatus || cell.open) return;

        // game over if a cell has bomb
        if (cell.bomb) {
            setBoard(revealBombs(board));
            setGameStatus(false);
            return;
        }

        let result = revealCell(cell.x, cell.y, board, emptyCellsLeft);
        setBoard(result.board);
        setEmptyCellsLeft(result.newNonMinesCount);
        setFlagsLeft(calcLeftFlags(board, difficulty));
    };

    useEffect(() => {
        // end game if all empty cell are open
        if (emptyCellsLeft === 0) {
            setGameStatus(false);
            setBoard(revealBombs(board));
        }
    }, [emptyCellsLeft]);

    return (
        <div className="Board">
            {board &&
                board.map((row) => {
                    return (
                        <div className="Board__row">
                            {row.map((cell) => {
                                return (
                                    <div
                                        className="Board__cell"
                                        onClick={() => clickCell(cell)}
                                        onContextMenu={(e) => {
                                            e.preventDefault();
                                            flagCell(cell);
                                        }}
                                    >
                                        <Cell cell={cell} />
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
        </div>
    );
};

export default Board;
