// const burgerToggle = document.querySelector('.header__burger');
// const menuMobile = document.querySelector('.menu-mobile__list');

// burgerToggle.onClick = function(){
//   burgerToggle.classList.toggle('header__burger-active');
//   menuMobile.classList.toggle('menu-mobile__list--active');
// }

document.querySelector('.header__burger').addEventListener('click', function(){
  document.querySelector('.header__burger').classList.toggle('header__burger-active');
})

document.querySelector('.header__burger').addEventListener('click', function(){
  document.querySelector('.menu-mobile').classList.toggle('menu-mobile--active');
})