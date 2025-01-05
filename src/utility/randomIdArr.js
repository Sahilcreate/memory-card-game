export default function generateRandomIdArray(totalPosibility, cardsShown) {
  if (cardsShown > totalPosibility) {
    throw new Error(
      "Cannot generate more unique IDs than the total possibilities."
    );
  }

  const availableIds = Array.from(
    { length: totalPosibility },
    (_, index) => index + 1
  );
  const randomIdArr = [];

  for (let i = 0; i < cardsShown; i++) {
    const randomIndex = Math.floor(Math.random() * availableIds.length);
    randomIdArr.push(availableIds[randomIndex]);
    availableIds.splice(randomIndex, 1);
  }

  return randomIdArr;
}
