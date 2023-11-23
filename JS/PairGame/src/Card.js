import { Node } from "./Node.js";
import { Sprite } from "./sprite.js";

export class Card {
  constructor(src, cover) {
    this._node = new Node();
    this._image = new Sprite(src);
    this._cover = new Sprite(cover);
    this._node.addChild(this._cover);
    this._node.addChild(this._image);
    this.active = false;
    this.SIZE = 160;
    this._node.width = this.SIZE;
    this._node.height = this.SIZE + 20;
    this.isFlipped = false;
  }
  get active() {return this._active;}
  set active(value) {
    this._active = value;
    this._image.active = value
    this._cover.active = !value;
  }
  show(value) {
    this.active = value;
  }
  flip(dur, delay=0){
    gsap.to(this._node,{
      scaleX:0, duration:dur,delay, onComplete:()=>{
        this.show(!this._active);
        this.isFlipped = true;
      }
    })
    gsap.to(this._node, {scaleX:1, duration:dur, delay:dur+delay,
    onComplete:()=> {
      this.isFlipped = false;
    }});
  }
  matchAnim(size, dur){
    gsap.to(this._node, {
      scaleX: size,
      scaleY: size,
      duration: dur,
      delay:dur,
      onComplete: () => {
        gsap.to(this._node, {
          blur: 0,
          duration: dur,
          onComplete: () => {
            this._node.removeChild(this._image);
          },
        });
      },
    });
  }
}
