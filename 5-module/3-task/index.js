function initCarousel() {
  // ваш код...
  const rightBtn = document.querySelector('.carousel__arrow_right');
  const leftBtn = document.querySelector('.carousel__arrow_left');
  const currentItem = document.querySelector(".carousel__inner");
  const itemsCount= document.querySelectorAll('.carousel__slide').length
  let currentSlide = 0;
  const slideWidth = currentItem.offsetWidth;

  display();

  rightBtn.addEventListener('click', () => {
    currentSlide++;
    display()
  });

  leftBtn.addEventListener('click', () => {
    currentSlide--;
    display()
  });

  function display () {
    let offset = -currentItem.offsetWidth * currentSlide;
    console.log(offset);
    currentItem.style.transform = `translateX(${offset}px)`;

    currentSlide == itemsCount - 1 ? rightBtn.style.display = 'none' : rightBtn.style.display = '';
    currentSlide == 0 ? leftBtn.style.display = 'none' : leftBtn.style.display = '';
    }
  }



  // rightBtn.addEventListener(click, () => {
  //   if (currentSlide !== itemsCount) {
  //      Box.style.transform = 'translateX(-' + widthSilde + 'px)';
  //     currentSlide++
  //   }
  //   if (currentSlide !== 1) {
  //     leftBtn.style.display = '';
  //   }
  //   if (currentSlide == itemsCount) {
  //     rightBtn.style.display = 'none';
  //   } 
  // });

  // leftBtn.addEventListener(click, () => {
  //   if (currentSlide >= 1){
      
  //   }
  //   if (current == 1) {
  //     btnLeft.style.display = 'none';
  //   }
  // })
  
// }
