export class Node { 
  constructor() {
      this.elm = this._createElement();
      this.children = [];
      this.scaleX = 1;
      this.scaleY = 1;
      this.blur = 1;
  }
  get x() { return this._x; }
  get y() { return this._y; }
  get width(){return this._width;}
  get height(){return this._height;}
  get scaleX(){return this._scaleX;}
  get scaleY(){return this._scaleY;}
  get active(){return this._active;}
  get blur(){return this._opacity;}
  set x(value) {
      this._x = value;
      this.elm.style.left = this._x + "px";
  }
  set y(value) {
      this._y = value;
      this.elm.style.top = this._y + "px";
  }
  set width(value) {
    this._width = value;
    this.elm.style.width = `${value}px`;
  }
  set height(value){
    this._height = value;
    this.elm.style.height = `${value}px`;
  }
  set scaleX(value){
    this._scaleX = value;
    this.elm.style.transform = `scale(${this.scaleX},${this.scaleY})`
  }
  set scaleY(value){
    this._scaleY = value;
    this.elm.style.transform = `scale(${this.scaleX},${this.scaleY})`
  }
  set blur(value){
    this._opacity = value;
    this.elm.style.opacity = value;
  }
  set active(value){
    this._active = value;
    this.elm.style.display = value ? "block" : "none";
  }
  _createElement() {
      let elm = document.createElement("div");
      elm.style.position = "absolute";
      elm.style.width = "100px"
      elm.style.height = "100px"
      return elm;
  }
  addChild(node) {
      this.children.push(node);
      this.elm.appendChild(node.elm);
  }
  removeChild(node) {
       this.children.pop(node);
       this.elm.removeChild(node.elm);
  }
}