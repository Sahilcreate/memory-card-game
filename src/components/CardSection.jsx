import Card from "./Card"
import generateRandomIdArray from "../utility/randomIdArr.js"

function CardSection({handleClick, cardsShown, totalPosibility}) {
    const randomIdArr = generateRandomIdArray(totalPosibility, cardsShown);
    return (
        <div className="display-all-cards">
            {
                randomIdArr.map((randomId, index) => {
                    return (
                        <div key={index} className="display-card">
                            <Card handleClick={handleClick} id={randomId}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CardSection