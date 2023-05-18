let bMenu = document.querySelector(".burger-menu");
let Ulinks = document.querySelector("header .container ul");
let dateP = document.querySelector(".copyright");
let dateNow = new Date();
let textCop = document.createTextNode(`Copyright © ${dateNow.getFullYear()} . All Rights Reserved.`)


bMenu.addEventListener("click",()=>{
    Ulinks.classList.toggle("active");
})

// Time

dateP.appendChild(textCop)
