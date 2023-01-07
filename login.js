'use strict'

let user__l;
let user__p;

function proverka() {
  if (user__l == 'l' && user__p == 'p') {
    alert('Добро пожаловать');
    window.location.href = 'index.html';
  }
  else{
    alert("Не правильный логин или пароль");
  }
}
let chena = document.querySelectorAll('input');
console.log();

let header = document.querySelector('header')
let body = document.querySelector('body');
let nav = document.getElementById('li__navbar__home');
let nav__ab = document.getElementById('link__navbar__about');
let prod = document.getElementById('li__navbar__ab');
let img__fon__black = document.getElementById('img__fon__black');


let date = new Date;
let hours = date.getHours();


if (hours<=18) {
	header.style.background = 'rgb(1 46 40)';
	body.style.color = 'aqua';
	nav.style.color = 'white';
  nav__ab.style.color = 'white';
  li__navbar__ab.style.color = 'white';
}
else{
  img__fon__black.style.opacity = '0';
}