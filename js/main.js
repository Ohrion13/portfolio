/**
 * Smooth scroll for anchor links
 * Attaches a smooth scroll behavior to anchor links that point to internal page sections.
 */
function smoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}

/**
 * Visibility effect for sections on scroll
 * Adds the 'visible' class to sections when they come into view as the user scrolls.
 */
function handleSectionVisibility() {
  window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.character-sheet__section');
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < window.innerHeight * 0.8) {
        section.classList.add('visible');
      } else {
        section.classList.remove('visible');
      }
    });
  });
}


/**
 * Toggle the active state of the burger menu and header.
 * This function adds or removes the 'active' class on the navigation menu and the header 
 * when the burger button is clicked.
 */
function toggleBurgerMenu() {
  const burgerButton = document.querySelector('.nav__burger');
  const header = document.querySelector('.header');
  const navList = document.querySelector('.nav__list');

  burgerButton.addEventListener('click', () => {
    navList.classList.toggle('active');
    burgerButton.classList.toggle('active');
    header.classList.toggle('active');
  });
}


smoothScroll();
handleSectionVisibility();
toggleBurgerMenu();
