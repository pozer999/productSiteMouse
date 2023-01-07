'use strict'

let header = document.querySelector('header')
let body2 = document.querySelector('body');
let nav = document.getElementById('link__navbar');
let nav__ab = document.getElementById('link__navbar__about');
let con__direct = document.getElementById('con__direct');
let our_t = document.getElementById('our_t');
let stock = document.getElementById('stock');
let fifty = document.getElementById('fifty');
let price = document.getElementById('price');
let minus =document.getElementById('minus');
let plus =document.getElementById('plus');
let val =document.getElementById('val');
let active = document.getElementById('link__navbar__toze');

let date = new Date;
let hours = date.getHours();

if (hours<=18) {
	body2.style.background = 'black';
	header.style.background = 'rgb(1 46 40)';
	body2.style.color = 'aqua';
  nav.style.color = 'white';
  nav__ab.style.color = 'white';
  con__direct.style.background = 'aqua';
  our_t.style.color = 'aqua';
  stock.style.color = 'aqua';
  price.style.color = 'aqua';
  fifty.style.color = 'red';
  minus.style.color = 'aqua';
  val.style.color = 'aqua';
  plus.style.color = 'aqua';
  minus.style.background = '#004848';
  val.style.background = '#004848';
  plus.style.background = '#004848';
  active.style.color = 'aqua';
  active.style.borderBottom = '1px aqua solid';
}
else{
  img__fon__black.style.opacity = '0';
}










document.addEventListener('click', function (e) {
  if (e.target.classList.contains("plus")) {
    
    ++e.target.parentElement.querySelector("input").value;
    

    console.log(e.target.parentElement.querySelector("input").value + '+');
  } else if (e.target.classList.contains("minus")) {
    if(e.target.parentElement.querySelector("input").value>1){
    --e.target.parentElement.querySelector("input").value;
    }
    else{
      alert('Не возможно выбрать отрицательный товар!')
    }
    console.log(e.target.parentElement.querySelector("input").value + '-');
  }
})


let body = document.querySelector('body');
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let img4 = document.getElementById('img4');
let backback__img = document.getElementById('back__img');
let images = document.getElementById('images');


function img__big1() { 
  img1.style.height = '500px';
  img1.style.width = 'auto';
  img1.style.transition = 'width 0.5 ease';
  img1.style.position = 'absolute';
  img1.style.bottom = '0';
  img1.style.left = '0';
  img1.style.right = '0';
  img1.style.margin = '50px auto';
  img1.style.top = '200px';
  img1.style.borderLeft = ' solid 100px rgba(72, 69, 67, 1)';
  img1.style.borderRight = 'solid 100px rgba(72, 69, 67, 1)';
  img1.style.borderTop = 'solid 20px rgba(72, 69, 67, 1)';
  img1.style.borderBottom = 'solid 20px rgba(72, 69, 67, 1)';
  
  back__img.style.background = 'black';
  back__img.style.height = '1109px';
  back__img.style.width = '1440px';
  back__img.style.position = 'absolute';
  back__img.style.top = '0';
  back__img.style.bottom = '0';
  back__img.style.left = '0';
  back__img.style.right = '0';
  back__img.style.opacity= '0.7';


  
  console.log('увеличение 1');
}
function img__big2(){
  img2.style.height = '500px';
  img2.style.width = 'auto';
  img2.style.transition = 'width 0.5 ease';
  img2.style.position = 'absolute';
  img2.style.bottom = '0';
  img2.style.left = '0';
  img2.style.right = '0';
  img2.style.margin = '50px auto';
  img2.style.top = '200px';
  img2.style.borderLeft = ' solid 100px rgba(72, 69, 67, 1)';
  img2.style.borderRight = 'solid 100px rgba(72, 69, 67, 1)';
  img2.style.borderTop = 'solid 20px rgba(72, 69, 67, 1)';
  img2.style.borderBottom = 'solid 20px rgba(72, 69, 67, 1)';

   back__img.style.background = 'black';
    back__img.style.height = '1109px';
    back__img.style.width = '1440px';
    back__img.style.position = 'absolute';
    back__img.style.top = '0';
    back__img.style.bottom = '0';
    back__img.style.left = '0';
    back__img.style.right = '0';
    back__img.style.opacity= '0.7';


    console.log('увеличение 2');
}

function img__big3(){
 img3.style.height = '500px';
  img3.style.width = 'auto';
  img3.style.transition = 'width 0.5 ease';
  img3.style.position = 'absolute';
  img3.style.bottom = '0';
  img3.style.left = '0';
  img3.style.right = '0';
  img3.style.margin = '50px auto';
  img3.style.top = '200px';
  img3.style.borderLeft = ' solid 100px rgba(72, 69, 67, 1)';
  img3.style.borderRight = 'solid 100px rgba(72, 69, 67, 1)';
  img3.style.borderTop = 'solid 20px rgba(72, 69, 67, 1)';
  img3.style.borderBottom = 'solid 20px rgba(72, 69, 67, 1)';

  back__img.style.background = 'black';
    back__img.style.height = '1109px';
    back__img.style.width = '1440px';
    back__img.style.position = 'absolute';
    back__img.style.top = '0';
    back__img.style.bottom = '0';
    back__img.style.left = '0';
    back__img.style.right = '0';
    back__img.style.opacity= '0.7';


    console.log('увеличение 3');
}


function reset__img1() {
  img1.style.height = '85px';
  img1.style.width = 'auto';
  img1.style.transition = 'width 0.5 ease';
  
  img1.style.position = '';
  img1.style.bottom = '';
  img1.style.left = '';
  img1.style.right = '';
  img1.style.margin = '';
  img1.style.top = '';
  img1.style.borderLeft = '';
  img1.style.borderRight = '';
  img1.style.borderTop = '';
  img1.style.borderBottom = '';

  back__img.style.background = '';
  back__img.style.height = '';
  back__img.style.width = '';
  back__img.style.position = '';
  back__img.style.top = '';
  back__img.style.bottom = '';
  back__img.style.left = '';
  back__img.style.right = '';
  back__img.style.opacity = '';

  console.log('уменьшение 1');
}
  function reset__img2() {
  img2.style.height = '85px';
  img2.style.width = 'auto';
  img2.style.transition = 'width 0.5 ease';
  
  img2.style.position = '';
  img2.style.bottom = '';
  img2.style.left = '';
  img2.style.right = '';
  img2.style.margin = '';
  img2.style.top = '';
  img2.style.borderLeft = '';
  img2.style.borderRight = '';
  img2.style.borderTop = '';
  img2.style.borderBottom = '';

  back__img.style.background = '';
  back__img.style.height = '';
  back__img.style.width = '';
  back__img.style.position = '';
  back__img.style.top = '';
  back__img.style.bottom = '';
  back__img.style.left = '';
  back__img.style.right = '';
  back__img.style.opacity = '';

  console.log('уменьшение 2');
  }

  function reset__img3() {
  img3.style.height = '85px';
  img3.style.width = 'auto';
  img3.style.transition = 'width 0.5 ease';
  
  img3.style.position = '';
  img3.style.bottom = '';
  img3.style.left = '';
  img3.style.right = '';
  img3.style.margin = '';
  img3.style.top = '';
  img3.style.borderLeft = '';
  img3.style.borderRight = '';
  img3.style.borderTop = '';
  img3.style.borderBottom = '';

  back__img.style.background = '';
  back__img.style.height = '';
  back__img.style.width = '';
  back__img.style.position = '';
  back__img.style.top = '';
  back__img.style.bottom = '';
  back__img.style.left = '';
  back__img.style.right = '';
  back__img.style.opacity = '';

  console.log('уменьшение 3');
  }