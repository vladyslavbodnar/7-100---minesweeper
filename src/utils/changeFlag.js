const changeFlag = (x,y,board) => {
    board = board.map(row => row.map(cell => {
        if(cell.x === x && cell.y === y) {
            return {...cell, flag: !cell.flag}
        }
        return cell
    }))

    return board;
}

export default changeFlag