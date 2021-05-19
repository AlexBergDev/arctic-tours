function startCarousel(a) {
  let i;
  if (a > slides.length) {carouselPage = 1}    
  if (a < 1) {carouselPage = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[carouselPage-1].style.display = "block";  
}

function nextSlide(a) {
  startCarousel(carouselPage += a);
}