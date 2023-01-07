'use strict'

let header = document.querySelector('header')
let body2 = document.querySelector('body');
let prod_slide = document.getElementById('slide4');
let shop = document.getElementById('shop');
let nav = document.getElementById('link__navbar');
let nav__ab = document.getElementById('link__navbar__about');
let slide3 = document.getElementById('slide3');
let active = document.getElementById('link__navbar__toze');
let smena__white =document.getElementById('smena__white');
let smena =document.getElementById('smena');

let date = new Date;
let hours = date.getHours();
if (hours<=18) {
	body2.style.background = 'black';
	prod_slide.style.background = '#037666';
	header.style.background = 'rgb(1 46 40)';
	shop.style.background = '#037666';
	body2.style.color = 'aqua';
  nav.style.color = 'white';
  nav__ab.style.color = 'white';
  slide3.style.opacity = '0';
  active.style.color = 'aqua';
  active.style.borderBottom = '1px aqua solid';
}
else{
  img__fon__black.style.opacity = '0';
}



document.addEventListener('click', function f (e) {
  if (e.target.classList.contains("smena")) {
    body2.style.background = 'black';
    prod_slide.style.background = '#037666';
    header.style.background = 'rgb(1 46 40)';
    shop.style.background = '#037666';
    body2.style.color = 'aqua';
    nav.style.color = 'white';
    nav__ab.style.color = 'white';
    slide3.style.opacity = '0';
    active.style.color = 'aqua';
    active.style.borderBottom = '1px aqua solid';
    img__fon__black.style.opacity = '100';
    smena.style.display = 'none';
    smena__white.style.display = 'block';
  }
})

document.addEventListener('click', function f1 (e) {
  if (e.target.classList.contains("smena__white")) {
    body2.style.background = 'white';
    prod_slide.style.background = 'white';
    header.style.background = 'white';
    shop.style.background = 'black';
    body2.style.color = 'black';
    nav.style.color = 'rgb(57 61 69 / 77%)';
    nav__ab.style.color = 'rgb(57 61 69 / 77%)';
    slide3.style.opacity = '100';
    active.style.color = 'black';
    active.style.borderBottom = '1px black solid';
    img__fon__black.style.opacity = '0';
    smena__white.style.display = 'none';
    smena.style.display = 'block';
  }
})



