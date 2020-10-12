import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.render();

  }

  render(){
    this.elem = createElement(
      `<div class="carousel">
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
      </div>`
    )

    const inner = createElement(`<div class="carousel__inner">`);

    const renderslides = this.slides.map(item => createElement(
      `<div class="carousel__slide" data-id="${item.id}">
      <img
        src="/assets/images/carousel/${item.image}"
        class="carousel__img"
        alt="slide"
      />
      <div class="carousel__caption">
        <span class="carousel__price">€${item.price.toFixed(2)}</span>
        <div class="carousel__title">${item.name}</div>
        <button type="button" class="carousel__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon" />
        </button>
      </div>
    </div>`
    ));
    this.elem.append(inner);
    inner.append(...renderslides)
  };
  
}
