const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const arrow2 = document.querySelector('.arrow2');
const arrow3 = document.querySelector('.arrow3');
const expertiseFloat = document.querySelector('.expertise-float');
const ourTeamFloat = document.querySelector('.our-team-float');
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach((parameter) => {
  if (parameter.href.includes(`${activePage}`)) {
    parameter.classList.add('active')
  }
});

hamburger.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
});

arrow3.addEventListener('click', () => {
  expertiseFloat.classList.toggle('expertise-open');
  arrow3.classList.toggle('add');
});

arrow2.addEventListener('click', () => {
  ourTeamFloat.classList.toggle('our-team-float-open');
  arrow2.classList.toggle('add');
});

