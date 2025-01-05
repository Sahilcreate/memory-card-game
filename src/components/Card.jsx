import { useEffect, useState } from "react";

function Card({handleClick, id}) {
    const [cardData, setCardData] = useState({
        id: id,
        name: "",
        imageUrl: "",
    })

    useEffect(() => {
        const fetchCardData = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
                const jsonResponse = await response.json();
    
                setCardData({
                    id: id,
                    name: jsonResponse["name"],
                    imageUrl: jsonResponse["sprites"]["other"]["official-artwork"]["front_default"]
                });
            } catch (error) {
                console.log(`Error fetching pokemon data with id=${id}: `, error)
            }
        };

        fetchCardData();
    }, []);

    if(!cardData.imageUrl) {
        return (
            <div className="display-loading-sign">Loading...</div>
        )
    }

    return (
      <>
        <button onClick={() => handleClick(cardData.id)}>
            <img src={cardData.imageUrl} alt={`${cardData.name}-${cardData.id}`}/>
        </button>
        <div className="display-card-name">
            {cardData.name}
        </div>
      </>
    )
}

export default Card