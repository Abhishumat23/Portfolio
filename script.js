let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


const name = "Abhishumat Singh Beniwal";

const typedNameElement = document.getElementById("typed-name");

function typeWriter() {
  let charIndex = 0;
  const typingInterval = setInterval(() => {
    if (charIndex < name.length) {
      typedNameElement.textContent += name.charAt(charIndex);
      charIndex++;
    } else {
      clearInterval(typingInterval);
    }
  }, 100); 
}

window.onload = typeWriter;


