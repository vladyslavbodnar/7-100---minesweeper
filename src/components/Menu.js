const Menu = ({ difficulty, setDifficulty, flagsLeft }) => {
    return (
        <div className="Menu">
            <select className="Menu__select" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
            <p>🚩 {flagsLeft}</p>
        </div>
    );
};

export default Menu;
