import Game from "./Game";

function App() {
  const totalPossibility = 150;
  const cardsShown = 10;

  return (
    // <div className='flex items-center justify-center h-screen text-gray-700'>
    //   <h1 className="text-4xl font-bold text-blue-400">
    //     This is Tailwindcss.
    //   </h1>
    // </div>
    <>
      <header>
        <span className="logo">Flip `Em All</span>
      </header>

      <Game totalPossibility={totalPossibility} cardsShown={cardsShown}/>

      <footer>
        <span className="footer">
          made by <a href="https://github.com/Sahilcreate/memory-card-game">Sahil</a> © 2025
        </span>
      </footer>
    </>
    
  );
}

export default App
