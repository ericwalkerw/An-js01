class Card { 
    constructor(index) {
        this.index = index;
        this.element = document.createElement('div');
        this.img = document.createElement('img');
        this.element.appendChild(this.img);
        document.body.appendChild(this.element);
        Card.SIZE = 200;
        this.initStyles();
    }
    initStyles() {
        this.element.style.width = `${Card.SIZE}px`;
        this.element.style.height = `${Card.SIZE}px`;
        this.element.style.perspective = '1000px';
        this.img.style.width = '100%';
        this.img.style.height = '100%';
        this.img.style.backgroundColor = 'blue';
    }
}

const card1 = new Card(0);
