function GameOverScreen({handleClick}) {
  return (
    <div className="display-game-over-screen">
      <div className="display-game-over-text">GAME OVER!</div>
      <button onClick={() => handleClick()}>Play Again?</button>
    </div>
  )
}

export default GameOverScreen;