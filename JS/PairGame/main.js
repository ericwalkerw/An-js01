import { Card } from "./src/Card.js";
import { Label } from "./src/Label.js";

class Game {
  constructor() {
    this.arr = [
      "./Image/amulet.jpg",
      "./Image/sword.jpg",
      "./Image/glasses.jpeg",
      "./Image/ring.jpeg",
      "./Image/pc.jpeg",
      "./Image/helmet.jpg",
      "./Image/hammer.jpeg",
      "./Image/phone.jpeg",
      "./Image/jacket.jpeg",
      "./Image/jew.jpg",
    ];
    this.init();
    this.openedCards = [];
    this.matchCards = [];
    this.SCORE = 10000;
  }
   shuffle = (array) => array.sort(() => Math.random() - 0.5);
  init() {
    //this.createText();
    //const shuffledArr = this.shuffle([...this.arr, ...this.arr]);
    const shuffledArr2 = [...this.arr, ...this.arr];
    this.createBoard(shuffledArr2);
  }
  // createText(){
  //   const scoreEl = document.querySelector(".Score");
  //   const score_txt = new Label('SCORE : 10000'); 
  //   score_txt.size = 38;
  //   score_txt.font = "arial";
  //   // score_txt.color = '';
  //   scoreEl.appendChild(score_txt.elm);
  // }
  createCard(image, cover) {
       const containerEl = document.querySelector(".container");
     const card = new Card(image, cover);
    // card.show(0);
     containerEl.appendChild(card.node.elm);
    // return card;
  }
  createBoard(arr) {
     for (let i = 0; i < 20; i++) {
       const newCard = this.createCard(arr[i], "./question.png");
    //   newCard.node.x = 170 * (i % 5);
    //   newCard.node.y = 190 * Math.floor(i / 5);
    //   newCard.node.elm.onclick = () => {
    //     this.clickHandler(newCard);
    //   };
     }
  }
  clickHandler(card) {
    // if (
    //   this.openedCards.length <= 1 &&
    //   !this.openedCards.includes(card) &&
    //   !this.matchCards.includes(card)
    // ) {
    //   card.flip(0.6);
    //   this.openedCards.push(card);
    //   console.log(this.openedCards);
    //   if (this.openedCards.length === 2) {
    //     this.checkMatch();
    //     if (this.matchCards.length === 20) {
    //       setTimeout(() => {
    //         alert("WIN GAME");
    //       }, 1000);
    //     }
    //   }
    // }
    // return;
  }
  checkMatch() {
    // const [card1, card2] = this.openedCards;
    // console.log(card1.image.id, card2.image.id);
    // const isMatch = card1.image.id === card2.image.id;
    // if (isMatch) {
    //   this.matchCards.push(card1, card2);
    //   card1.matchAnim(1.4, 1);
    //   card2.matchAnim(1.4, 1);
    // } else {
    //   card1.flip(0.6, 1.5);
    //   card2.flip(0.6, 1.5);
    // }
    // setTimeout(() => {
    //   this.openedCards = [];
    // }, 2500);
  }
}

const game = new Game();
