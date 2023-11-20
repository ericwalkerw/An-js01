import {Sprite} from "Sprite.js"

export class Node {
    constructor() {
        this._sprite = new Sprite();
        this._x = 1;
        this._y = 1;
        this._width = 1;
        this._height = 1;
        this.elm = this._createElement();
        this.children = [];
    }

    get x() { return this._x; }
    set x(value) { 
        this._x = value; 
        this.elm.style.left = this._x + "px"; 
    }

    get y() { return this._y; }
    set y(value) { 
        this._y = value; 
        this.elm.style.top = this._y + "px"; 
    }

    get width() { return this._width; }
    set width(value) { 
        this._width = value; 
        this.elm.style.width = this._width + "px"; 
    }

    get height() { return this._height; }
    set height(value) { 
        this._height = value; 
        this.elm.style.height = this._height + "px"; 
    }

    _createElement() {
        let elm = document.createElement("div");
        elm.style.position = "absolute";
        elm.style.width = this._width + "px";
        elm.style.height = this._height + "px";
        elm.style.left = this._x + "px";
        elm.style.top = this._y + "px";
        return elm;
    }

    addChild(node) {
        this.children.push(node);
        this.elm.appendChild(node.elm);
    }

    removeChild(node) {
        const index = this.children.indexOf(node);
        if (index !== -1) {
            this.children.splice(index, 1);
            this.elm.removeChild(node.elm);
        }
    }
}