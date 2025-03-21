const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('hide');
});

// form start

document.getElementById('loginform').addEventListener('submit', function(event) {
  event.preventDefault(); 

  // Clear previous errors
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('passwordError').textContent = '';

  // Form validation
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  let isValid = true;

  if (name === '') {
      document.getElementById('nameError').textContent = 'Name is required.';
      isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
      document.getElementById('emailError').textContent = 'Invalid email format.';
      isValid = false;
  }

  if (password.length < 6) {
      document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
      isValid = false;
  }

  if (isValid) {
      window.location.href = 'index1.html'; // Redirect on successful validation
  }
});
function showAlert(event) {
  event.preventDefault(); // Prevent form submission for demonstration
  alert("Thank you for submitted!");
  setTimeout(function() {
    window.location.href = "index1.html"; 
}, 500); // Delay for 1 second (1000ms) before redirecting
}
// form end

//carousels start
document.addEventListener('DOMContentLoaded', () => {
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
      });
      card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
      });
    });
  })
  const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange the slides next to one another
slides.forEach((slide, index) => {
  slide.style.left = `${slideWidth * index}px`;
});

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = `translateX(-${targetSlide.style.left})`;
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
};

// Move to the next slide
nextButton.addEventListener('click', () => {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;

  if (nextSlide) {
    moveToSlide(track, currentSlide, nextSlide);
  }
 });

// Move to the previous slide
prevButton.addEventListener('click', () => {
  const currentSlide = track.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;

  if (prevSlide) {
    moveToSlide(track, currentSlide, prevSlide);
  }
});
/*----------------------------------------------------------------*/

  


