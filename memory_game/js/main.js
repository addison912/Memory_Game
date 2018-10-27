let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];

function checkForMatch() {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
    } else {
      alert("Sorry, try again.");
    }
    cardsInPlay = [];
  }
}

function flipCard(cardId) {
  console.log(`User flipped a ${cardId}!`);
  cardsInPlay.push(cardId);
  checkForMatch();
}

flipCard(cards[1]);
flipCard(cards[3]);
