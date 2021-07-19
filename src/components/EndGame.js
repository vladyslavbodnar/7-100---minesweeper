const EndGame = ({ newGame }) => {
    return (
        <div className="EndGame">
            <button onClick={() => newGame()} className="EndGame__button">
                Start again
            </button>
        </div>
    );
};

export default EndGame;
