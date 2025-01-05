export default function generateRandomIdArray(totalPosibility, cardsShown) {
  const randomIdArr = [];

  for (let i = 0; i < cardsShown; i++) {
    const randomId = Math.floor(Math.random() * totalPosibility) + 1;
    randomIdArr.push(randomId);
  }

  return randomIdArr;
}
