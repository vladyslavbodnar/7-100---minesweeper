import {generateMineColor, bombChexPattern, chexPattern, numColorCode} from "../utils/generateColors";

const Cell = ({ cell }) => {
    const style = {
        background: cell.open
            ? cell.bomb
            ? generateMineColor(cell)
            : bombChexPattern(cell.x, cell.y)
            : chexPattern(cell.x, cell.y),
        color: numColorCode(cell.minesNear),
    };

    return (
        <div className="Cell" style={style}>
            {cell.bomb && cell.open && "💣"}
            {cell.open && !cell.bomb && cell.minesNear !== 0 && cell.minesNear}
            {cell.flag && !cell.open && "🚩"}
        </div>
    );
};

export default Cell;


