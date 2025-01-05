import { useEffect } from "react";
import { useState } from "react";
import CardSection from "./CardSection";
import GameOverScreen from "./GameOverScreen";

function Game({totalPossibility, cardsShown}) {
    const [cardIndexes, setCardIndexes] = useState([]);
    const [isGameOver, setIsGameOver] = useState(false);

    //local Storage
    const [highScore, setHighScore] = useState(() => {
        const localHighScore = localStorage.getItem('highScore');
        return localHighScore ? JSON.parse(localHighScore) : 0;
    })

    //update local Storage
    useEffect(() => {
        localStorage.setItem('highScore', JSON.stringify(highScore));
    }, [highScore]);

    const handleCardClick = (id) => {
        if (cardIndexes.includes(id)) {
            setIsGameOver(true);
        } else {
            const copyCardIndexes = cardIndexes.slice();
            copyCardIndexes.push(id);
            setCardIndexes(copyCardIndexes);
        }
    }

    const handleRestartBtnClick = () => {
        if (cardIndexes.length > highScore) {
            setHighScore(cardIndexes.length);
        }
        setCardIndexes([]);
        setIsGameOver(false);
    }
    
    //render Game
    return (
        <>
            <div className="display-all-score px-8 py-4 flex flex-col justify-evenly md:flex-row">
                <div className="display-high-score">
                    High Score: {highScore}
                </div>
                <div className="display-current-score">
                    Current Score: {cardIndexes.length}
                </div>
                <div className="display-total-possibilites">
                    Total Possibilites: {totalPossibility}
                </div>
            </div>

            {
                (isGameOver) 
                    ? <GameOverScreen handleClick={handleRestartBtnClick}/> 
                    : <CardSection handleClick={handleCardClick} cardsShown={cardsShown} totalPosibility={totalPossibility} key={cardIndexes.length}/>
            }
            
        </>
    )
}

export default Game;