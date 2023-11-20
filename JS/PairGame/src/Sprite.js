export class Sprite{
    constructor(){
        this._size = new Transform();
        this._scale = new Scale();
        this._img = 'none';
        this._element = document.createElement('div');
        document.body.appendChild(this._element);
    }
    get image(){return this._img;}
    get size(){return this._size;}
    get scale(){return this._scale;}

    set image(value){
        this._img = value;
        this._element.innerHTML = `<img src="${this._img}" alt="Sprite Image" />`;
    }
}

class Transform{
    constructor(){
        this.x = 1;
        this.y = 1;
    }
    get width(){return this.x}
    get height(){return this.y}

    set width(value){return this.x = value;}
    set height(value){return this.y = value;}
}

class Scale{
    constructor(){
        this.x = 1;
        this.y = 1;
    }
    get scaleX(){return this.x}
    get scaleY(){return this.y}
    
    set scaleX(value){return this.x = value;}
    set scaleY(value){return this.y = value;}
}