import Game from "./Game";

//render layout of App
function App() {

  //can be used in future as state to change the difficulty of App
  const totalPossibility = 100;
  const cardsShown = 12;

  return (
    <>
      <header className="px-8 py-4 flex justify-center align-middle">
        <span className="text-2xl font-semibold">Flip `Em All</span>
      </header>

      <Game totalPossibility={totalPossibility} cardsShown={cardsShown}/>

      <footer className="px-8 py-4 flex justify-center align-middle">
        <span className="footer">
          made by <a href="https://github.com/Sahilcreate/memory-card-game" target="_blank" className="text-blue-600">Sahil</a> © 2025
        </span>
      </footer>
    </>
    
  );
}

export default App
