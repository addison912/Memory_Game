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
const gameBoard = document.getElementById("game-board");

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

function createBoard() {
  for (let i = 0; i < cards.length; i++) {
    let cardElement = document.createElement("img");
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute("alt", `${cards[i].rank} of ${cards[i].suit}`);
    cardElement.className = "card";
    cardElement.setAttribute("data-id", i);
    gameBoard.appendChild(cardElement);
  }
}

createBoard();

gameBoard.addEventListener("click", function(event) {
  let cardId = event.target.getAttribute("data-id");
  event.target.setAttribute("src", cards[cardId].cardImage);
  console.log(`User flipped a ${cards[cardId].rank} of ${cards[cardId].suit}!`);
  cardsInPlay.push(cards[cardId].rank);
  checkForMatch();
});
