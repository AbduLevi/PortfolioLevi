let header = document.querySelector(".header");
let btn = document.querySelector(".menu-btn");
let nav = document.querySelector(".header .menu");
let icon = document.getElementById("menu");
let icon1 = document.getElementById("menu1");
let social = document.querySelector('.social');
let btn1 = document.querySelector('.btn');
window.onscroll = function () 
{
    if (scrollY > 40) {
        header.classList.add("sticky");
        icon1.classList.add('hide1');
    }
    else{
        header.classList.remove("sticky");
        icon1.classList.remove('hide1');
    }
}
btn.addEventListener('click',function(){
    if(icon.getAttribute('class') === 'fa-solid fa-bars'){
        icon.setAttribute('class','fa-solid fa-xmark');
        nav.classList.add("active");
    }
    else{
        icon.setAttribute('class','fa-solid fa-bars');
        nav.classList.remove("active");
    }
});
btn1.addEventListener('click',function(){
    social.classList.toggle('hide');
});
icon1.onclick = function(){
    window.scroll(0,0);
}
