import { useEffect, useState } from "react";

function Card({handleClick, id}) {
    const [cardData, setCardData] = useState({
        id: id,
        name: "",
        imageUrl: "",
    })

    //After component is mounted, it call the API and 
    //collects data. It is set to useEffect on every update
    //but a single Card component gets updated only once in
    //it's lifecycle due to CardSection component being 
    //destroyes and mount again after each click
    useEffect(() => {
        const fetchCardData = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
                const jsonResponse = await response.json();
    
                setCardData({
                    id: id,
                    name: jsonResponse["name"],
                    imageUrl: jsonResponse["sprites"]["front_default"]
                });
            } catch (error) {
                console.log(`Error fetching pokemon data with id=${id}: `, error)
            }
        };

        fetchCardData();
    });

    //render loading 
    if(!cardData.imageUrl) {
        return (
            <div className="display-loading-sign">Loading...</div>
        )
    }

    //render Card
    return (
      <>
        <button onClick={() => handleClick(cardData.id)} className=" flex flex-col justify-center gap-y-2 border-2 rounded-lg bg-slate-100/15 px-2 py-4 hover:border-black focus:border-black">
            <img src={cardData.imageUrl} alt={`${cardData.name}-${cardData.id}`} className="flex justify-center align-middle  min-w-32 min-h-32"/>
        </button>
      </>
    )
}

export default Card