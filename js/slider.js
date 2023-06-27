import Slide from "./slide.js";

export default class Slider {
  constructor(
    slideData,
    sIndex, 
    title, 
    quote, 
    img, 
    dots)
    {
    this.index = document.querySelector(sIndex);
    this.title = document.querySelector(title);
    this.quote = document.querySelector(quote);
    this.img = document.querySelector(img);
    this.dots = [...document.querySelectorAll(dots)];
    this.slide = [];
    this.indexInterval = null;
    for (const slide of slideData) {
      console.log(slide);
      this.addSlisde(
        new Slide(slide.index, slide.title, slide.quote, slide.img)
      );
    }
    // this.cickDot = this.dots.forEach(clickDot => clickDot.addEventListener('click', this.clickChange.bind(this)));
    this.active = 0;
    window.addEventListener("keyup", (e) => this.arrowChaneSlide(e));
  }
  start() {
    this.indexInterval = setInterval(this.changeSlide.bind(this), 3000);
  }
  addSlisde(items) {
    this.slide.push(items);
  }
  findActiveDots(){
    return this.dots.findIndex((dot) =>dot.classList.contains("active"));
  }
  updateDots() {
    const dotIndex = this.findActiveDots();
    this.dots[dotIndex].classList.remove("active");
    this.dots[this.active].classList.add("active");
  }
  changeSlide(action = 'plus') {
    action == 'plus' ? this.active++ : this.active--;
    
    if (this.active === this.slide.length){
        this.active = 0;
    }else if (this.active < 0) {
        this.active = this.slide.length - 1;
    }
    this.index.textContent = this.slide[this.active].index;
    this.title.textContent = this.slide[this.active].title;
    this.quote.textContent = this.slide[this.active].quote;
    this.img.src = this.slide[this.active].img;
    this.updateDots();
  }

  arrowChaneSlide(e) {
    clearInterval(this.indexInterval);

    switch (e.keyCode) {
      case 37:
        console.log('działa');
        this.changeSlide('minus');
        break;
      case 39:
        this.changeSlide();
        break;
      default:
        break;
    }
    this.start();
  }
//   clickChange(){
//     const activeDot = this.findActiveDots()
//     this.dots[activeDot].classList.remove("active")
//    console.log(this.cickDot);

//   }
}
