import { Card } from "./src/Card.js";

const NUM_COLUMNS = 5;
const NUM_ROWS = 4;
const TOTAL_CARDS = NUM_COLUMNS * NUM_ROWS;
const BOARD_SIZE = 160;
const CARD_SIZE = 150;
const imageAssets = [
  "./Image/sword.jpg",
  "./Image/amulet.jpg",
  "./Image/glasses.jpeg",
  "./Image/hammer.jpeg",
  "./Image/helmet.jpg",
  "./Image/jacket.jpeg",
  "./Image/jew.jpg",
  "./Image/pc.jpeg",
  "./Image/phone.jpeg",
  "./Image/ring.jpeg"
];
let coverAsset = "./question.png";
const containerEl = document.querySelector(".container");

let openedCards = [];
let matchedCards = [];

const shuffle = array => array.sort(() => Math.random() - 0.5);

function resetCards(card1, card2) {
  setTimeout(() => {
    card1.show(false);
    card2.show(false);
  }, 1000);
}

function handleCardClick(card) {
  if (openedCards.length < 2 && !matchedCards.includes(card)) {
    card.show(true);
    openedCards.push(card);
    if (openedCards.length === 2) {
      checkMatch();
    }
  }
}

function checkMatch() {
  const [card1, card2] = openedCards;
  const isMatch = card1.index === card2.index;

  if (isMatch) {
    matchedCards.push(card1, card2);
    if (matchedCards.length === TOTAL_CARDS) {
      alert("Congratulations! You won!");
    }
  } else {
    resetCards(card1, card2);
  }

  openedCards = [];
}

(function init() {
  let allCards = [];

  const shuffledImages = shuffle(imageAssets);

  for (let i = 0; i < TOTAL_CARDS; i++) {
    const card = new Card(i % shuffledImages.length, shuffledImages[i % shuffledImages.length], coverAsset);
    card._node.width = card._node.height = CARD_SIZE;
    card._node.x = BOARD_SIZE * (i % NUM_COLUMNS);
    card._node.y = BOARD_SIZE * Math.floor(i / NUM_COLUMNS);
    allCards.push(card);
    card._node.elm.addEventListener("click", () => handleCardClick(card));
  }

  allCards = shuffle(allCards);
  allCards.forEach(element => {
    containerEl.appendChild(element._node.elm);
  });
})();
