import Card from "./Card"
import generateRandomIdArray from "../utility/randomIdArr.js"

//unmount on Card click due to 'key' change
function CardSection({handleClick, cardsShown, totalPosibility}) {
    const randomIdArr = generateRandomIdArray(totalPosibility, cardsShown);
    return (
        <div className="display-all-cards px-12 grow grid grid-cols-max-content-2 md:grid-cols-max-content-3 lg:grid-cols-max-content-6  place-items-center content-center justify-center gap-4">
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