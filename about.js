'use strict'

let header = document.querySelector('header')
let body = document.querySelector('body');
let nav = document.getElementById('li__navbar__home');
let nav__ab = document.getElementById('link__navbar__about');
let con__direct = document.getElementById('con__direct');
let our = document.getElementById('our');
let active = document.getElementById('link__navbar__toze');

let date = new Date;
let hours = date.getHours();


if (hours<=18) {
  body.style.backgroundImage = "url(img\black__fon.jpg')";
	header.style.background = 'rgb(1 46 40)';
	body.style.color = 'aqua';
	nav.style.color = 'white';
  nav__ab.style.color = 'white';
	con__direct.style.background = 'aqua';
	our.style.color = 'aqua';
	active.style.color = 'aqua';
  active.style.borderBottom = '1px aqua solid';

}
else{
  img__fon__black.style.opacity = '0';
}