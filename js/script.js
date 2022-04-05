// Scroll on click
document.getElementsByClassName('header__scroll')[0].addEventListener('click', e => {
  document.getElementsByClassName('about')[0].scrollIntoView();
});

// Animate content if it comes into view
const aboutContent = document.querySelector('.about__content');
const aboutTechnologies = document.querySelector('.about__technologies');
const projectsItem1 = document.querySelector('.projects__item--1');
const projectsItem2 = document.querySelector('.projects__item--2');
const scrollBreakpoints = [aboutContent, aboutTechnologies, projectsItem1, projectsItem2];

scrollBreakpoints.forEach(breakpoint => {
  document.addEventListener('scroll', function(e) {
    const top = window.scrollY + window.innerHeight;
    const isVisible = top > breakpoint.offsetTop;
    if (isVisible) breakpoint.classList.add('animate');
  });
});