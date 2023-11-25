import { Node } from "./Node.js";
import { Sprite } from "./sprite.js";

export class Card {
  constructor(src, cover) {
    this.node = new Node();
    this.img = new Sprite(src);
    this.cover = new Sprite(cover);
    this.node.addChild(this.cover);
    this.node.addChild(this.img);
    this.active = false;
    this.SIZE = 160;
    this.node.width = this.SIZE;
    this.node.height = this.SIZE + 20;
    this.isFlipped = false;
  }
  get _active() {return this.active;}
  set _active(value) {
    this.active = value;
    this.img.active = value
    this.cover.active = !value;
  }
  show(value) {
    this.active = value;
  }
//   flip(dur, delay=0){
//     gsap.to(this.node,{
//       scaleX:0, duration:dur,delay, onComplete:()=>{
//         this.show(!this.active);
//         this.isFlipped = true;
//       }
//     })
//     gsap.to(this.node, {scaleX:1, duration:dur, delay:dur+delay,
//     onComplete:()=> {
//       this.isFlipped = false;
//     }});
//   }
//   matchAnim(size, dur){
//     gsap.to(this.node, {
//       scaleX: size,
//       scaleY: size,
//       duration: dur,
//       delay:dur,
//       onComplete: () => {
//         gsap.to(this.node, {
//           blur: 0,
//           duration: dur,
//           onComplete: () => {
//             this.node.removeChild(this.image);
//           },
//         });
//       },
//     });
//   }
}
