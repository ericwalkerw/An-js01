import { Card } from "./src/Card.js";

const NUM_COLUMNS = 5;
const NUM_ROWS = 4;
const TOTAL_CARDS = NUM_COLUMNS * NUM_ROWS;
const BOARD_SIZE = 160;
const CARD_SIZE = 150;
const imageAssets = ["./Image/sword.jpg"];
let coverAsset = "./question.png";
const containerEl = document.querySelector(".container");
let flippedCards = [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function checkMatch() {
    if (flippedCards.length === 2) {
        const [card1, card2] = flippedCards;
        if (card1.id === card2.id) {
            flippedCards = [];
        } else {
            setTimeout(() => {
                card1.show(false);
                card2.show(false);
                flippedCards = [];
            }, 1000); 
        }
    }
}

(function init() {
    let allCards = [];
    for (let i = 0; i < TOTAL_CARDS; i++) {
        const card = new Card(i % (imageAssets.length), imageAssets[i % (imageAssets.length)], coverAsset);
        card._node.width = card._node.height = CARD_SIZE;
        card._node.x = BOARD_SIZE * (i % NUM_COLUMNS);
        card._node.y = BOARD_SIZE * Math.floor(i / NUM_COLUMNS);
        containerEl.appendChild(card._node.elm);
        console.log(card.index);
        card._node.elm.addEventListener('click', () => {
            card.show(true);
        });

    }
    allCards = shuffleArray(allCards);
})();

