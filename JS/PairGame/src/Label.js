import { Node } from "./Node.js";
export class Label extends Node {
  constructor(txt) {
    super();
    this.elm = document.createElement("p");
    this._text = txt;
  }
  get _text() {return this.text;}
  get _font() {return this.font;}
  get _color() {return this.color;}
  get _size() {return this.size;}
  // set _text(value) {
  //   this.text = value;
  //   this.elm.textContent = value;
  // }
  // set _font(value) {
  //   this.font = value;
  //   this.elm.style.fontFamily = value;
  // }
  // set _color(value) {
  //   this.color = value;
  //   this.elm.style.color = value;
  // }
  // set _size(value) {
  //   this.size = value;
  //   this.elm.style.fontSize = `${value}px`;
  // }
}
