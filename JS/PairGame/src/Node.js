export class Node { 
  constructor() {
      this.elm = this._createElement();
      this.children = [];
      this._scaleX = 1;
      this._scaleY = 1;
      this._blur = 1;
  }
  get _x() { return this.x; }
  get _y() { return this.y; }
  get _width(){return this.width;}
  get _height(){return this.height;}
  get _scaleX(){return this.scaleX;}
  get _scaleY(){return this.scaleY;}
  get _active(){return this.active;}
  get _blur(){return this.opacity;}
  set _x(value) {
      this.x = value;
      this.elm.style.left = value + "px";
  }
  set _y(value) {
      this.y = value;
      this.elm.style.top = value + "px";
  }
  set _width(value) {
    this.width = value;
    this.elm.style.width = `${value}px`;
  }
  set _height(value){
    this._height = value;
    this.elm.style.height = `${value}px`;
  }
  set _scaleX(value){
    this.scaleX = value;
    this.elm.style.transform = `scale(${this.scaleX},${this.scaleY})`
  }
  set _scaleY(value){
    this.scaleY = value;
    this.elm.style.transform = `scale(${this.scaleX},${this.scaleY})`
  }
  set _blur(value){
    this.opacity = value;
    this.elm.style.opacity = value;
  }
  set _active(value){
    this.active = value;
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