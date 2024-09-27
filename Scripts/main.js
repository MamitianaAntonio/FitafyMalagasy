window.addEventListener('scroll', function() {
  const header = document.getElementById('main-header');
  if (window.scrollY > 50) {
      header.classList.add('transparent');
  } else {
      header.classList.remove('transparent');
  }
});


let slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showNextSlide() {
    slides[currentIndex].classList.remove('show');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('show');
}

// Initial slide
slides[currentIndex].classList.add('show');

// Change slide every 7 seconds
setInterval(showNextSlide, 7000);