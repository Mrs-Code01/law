const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const arrow2 = document.querySelector('.arrow2');
const arrow3 = document.querySelector('.arrow3');
const expertiseFloat = document.querySelector('.expertise-float');
const ourTeamFloat = document.querySelector('.our-team-float');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
})



// nav.addEventListener('click', () => {
//   nav.style.display = 'none';
// })

arrow3.addEventListener('click', () => {
  expertiseFloat.classList.toggle('expertise-open');
});
arrow2.addEventListener('click', () => {
  ourTeamFloat.classList.toggle('our-team-float-open');
});
