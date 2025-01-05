
//render GameOver Screen
function GameOverScreen({handleClick}) {
  return (
    <div className="display-game-over-screen grow flex flex-col justify-center items-center gap-y-4 min-w-full">
      <div className="display-game-over-text">GAME OVER!</div>
      <button onClick={() => handleClick()} className="px-4 py-2 border-2 rounded-lg max-w-max bg-transparent hover:border-black focus:border-black">Play Again?</button>
    </div>
  )
}

export default GameOverScreen;