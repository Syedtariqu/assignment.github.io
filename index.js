
let slideIndex = 1;
showSlides(slideIndex);


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let cards = document.getElementsByClassName("cards");
  let dots = document.getElementsByClassName("dot");
  if (n > cards.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = cards.length }
  for (i = 0; i < cards.length; i++) {
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    if (mediaQuery.matches) {
    } else {
      cards[i].style.display = "none";
    }
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  cards[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
