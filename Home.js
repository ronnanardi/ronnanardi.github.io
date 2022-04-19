const toggle = document.querySelector('.menu-toggle');
const span1 = document.querySelector('.menu-toggle span:nth-child(1)');
const span2 = document.querySelector('.menu-toggle span:nth-child(2)');
const span3 = document.querySelector('.menu-toggle span:nth-child(3)');
const navUl = document.querySelector('.navbar .kolomkedua ul');

toggle.onclick = function(){
    span1.classList.toggle('animation1');
    span3.classList.toggle('animation2');
    span2.classList.toggle('animation3');
    navUl.classList.toggle('slide');
};