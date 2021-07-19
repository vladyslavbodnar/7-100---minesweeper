import { useEffect, useState } from "react";
import Board from "./components/Board";
import EndGame from "./components/EndGame";
import Menu from "./components/Menu";
import createBoard from "./utils/createBoard";
import calcLeftFlags from "./utils/calcLeftFlags";

function App() {
    const [difficulty, setDifficulty] = useState("medium");
    const [board, setBoard] = useState(null);
    const [emptyCellsLeft, setEmptyCellsLeft] = useState(null);
    const [gameStatus, setGameStatus] = useState(true);
    const [flagsLeft, setFlagsLeft] = useState(null);

    useEffect(() => {
        newGame();
    }, [difficulty]);

    useEffect(() => {
        // count how many flags left
        if (board) {
            setFlagsLeft(calcLeftFlags(board, difficulty));
        }
    }, [board]);

    const newGame = () => {
        const boardState = createBoard(difficulty);
        setBoard(boardState.board);
        setEmptyCellsLeft(boardState.emptyCellsLeft);
        setGameStatus(true);
    };

    // set title
    useEffect(() => {
        document.title = "Minesweeper"
    }, [])

    return (
        <div className="App">
            <Menu difficulty={difficulty} setDifficulty={setDifficulty} flagsLeft={flagsLeft} />
            <Board
                board={board}
                setBoard={setBoard}
                emptyCellsLeft={emptyCellsLeft}
                setEmptyCellsLeft={setEmptyCellsLeft}
                gameStatus={gameStatus}
                setGameStatus={setGameStatus}
                setFlagsLeft={setFlagsLeft}
                difficulty={difficulty}
            />

            {!gameStatus && <EndGame newGame={newGame} />}
        </div>
    );
}

export default App;
