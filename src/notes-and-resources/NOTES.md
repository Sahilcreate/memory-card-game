## 2024-12-31

- Created the new repo for project
- I am thinking of using tailwind for this project. It will be my first time using it so let's see how it goes.
- For API, I will be using pokeapi
- initialised tailwindcss with postcss and autoprefixer
- Features I want to implement:
  - Current Score
  - High Score (maybe in local storage)
  - Do i want an unending game? (no upperlimit for cards, only end when user has game over), or do I want to set different difficulties. Let's go with continuous(unending) game. So I can just start the game immediately on page load.
  - An end game screen which has a button to start the game all over again and displaying current score.

### Pseudo-code for Game Logic

stateArray which will contain ids of card clicked
endGame state

PokeAPI will send

- name of pokemon
- id of pokemon
- url of pokemon image

```
on gameStart, show random cards on screen
current score: 0;
high score: 0(or from localeStorage);
when user clicks on a card
    if id exists in state array
        show end screen
    else
        add id in state array

when state array gets updated
    current score = stateArray.length
    again random cards are shown on screen

when game ends (endGame state is true)
    current score is shown on screen
    a button is shown with which current Score is reset
    and endGame state is set to null
        if currenScore > highScore
            update highScore
        else
            do nothing

```

## 2025-01-04

I was trying to use useEffect hook to update the app
if numbers of cards provided by pokeAPI ever increase
in future but there was some discrepancy between 'count'
provided by fetch request and actual upper limit of pokemon
id available  
As of today, Jan 04, 2025. 'count' is 1302, but the upper
limit of id for pokemon is 1025.  
So I am simply going to use a constant

```
const [totalPossibility, setTotalPossibility] = useState(0);

useEffect(() => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=0';

  const fetchPossibilities = async () => {
    try {
      const response = await fetch(url);
      const jsonResponse = await response.json();
      setTotalPossibility(jsonResponse.count);
    } catch (error) {
        console.log('Error fetching Total Possibilities: ', error);
    }
  };

  fetchPossibilities();
}, []);
```

Another thing is the number of cards to be shown. I am just going to leave it in `App.jsx` for now but if there comes a time where i want to set differnt difficulties for the app then it can be achieved by turning `cardsShown` in a state.

> Never forget to add `"react/prop-types": "off",` till you know how it's used otherwise your whole screen will be filled with wiggly red lines.

## 2025-01-05

- commited the changes i made yesterday.

I encountered a problem. It's not a problem with logic but a simple miscalculation on my part. I made the game continuous but set `totalPossibility = 1025`, which introduced a high probability of not encountering same twice.
But limiting the possibilites will also make the probability of same `id`
appearing in same run high, so i also have to take that into account.
