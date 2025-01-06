/**
 * Smooth scroll for anchor links.
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
 * Visibility effect for sections on scroll.
 * Adds the 'visible' class to sections when they come into view as the user scrolls.
 */
function handleSectionVisibility() {

  const sections = document.querySelectorAll(".index__section");

  const observer = new IntersectionObserver(

    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateX(0)";
          entry.target.style.transition = "opacity 0.5s, transform 0.5s";

        } else {
          entry.target.style.opacity = "0";
          entry.target.style.transform = "translateX(-100%)";
        }
      });
    },
    {
      threshold: 0.8,
    }
  );

  sections.forEach((section) => {
    section.style.opacity = 0; // S'assurer que la section est invisible au départ
    section.style.transform = "translateX(-100%)"; // ou translateX(100%) si tu préfères de l'autre côté

    observer.observe(section);
  });
}


/**
 * Toggles the burger menu visibility when the icon is clicked.
 * This function adds or removes the 'active' class on the navigation menu and the header when the burger button is clicked.
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


/**
 * Calculate and display the age based on a fixed birthdate.
 * This function computes the age by subtracting the birth year from the current year.
 * The age is displayed in an HTML element with ID 'age'.
 */
function calculateAge() {
  const birthdate = new Date('1983-03-03');
  const today = new Date();

  let age = today.getFullYear() - birthdate.getFullYear();
  const monthDifference = today.getMonth() - birthdate.getMonth();

  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())) {
    age--;
  }

  const ageElement = document.getElementById('age');
  if (ageElement) {
    ageElement.textContent = age;
  }
}


smoothScroll();
// handleSectionVisibility();
toggleBurgerMenu();
calculateAge();