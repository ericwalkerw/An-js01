import {Node} from "./Node.js"
export class Sprite extends Node{
    constructor(src){
        super();
        this.elm = document.createElement('img');
        this.elm.style.width = "100%";
        this.elm.style.height = "100%"
        this._image = src;

        const [, name,] = this._image.split('.');
        const [,, unique] = name.split('/');
        this.id = unique;
    }
    get _image(){return this.image;}
    get _id(){ return this.id;}
    set _image(value){
      this.image = value;
      this.elm.src = value;
      this.elm.alt = value;
    }
}