let cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];
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
  console.log(`User flipped a ${cardId.rank} of ${cardId.suit}!`);
  console.log(cardId.cardImage);
  cardsInPlay.push(cardId.rank);
  checkForMatch();
}

flipCard(cards[1]);
flipCard(cards[2]);
