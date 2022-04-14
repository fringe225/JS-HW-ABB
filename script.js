let lang=document.querySelector('#language');
let dropdown=document.querySelector('#languages');
let iconD=document.querySelector('.fa-angle-down');
lang.addEventListener("click",()=>{
    dropdown.classList.toggle('active')
    if(iconD.style.transform=='rotate(180deg)'){
        iconD.style.transform='rotate(0deg)'
    }else{
        iconD.style.transform='rotate(180deg)';
    }
})

let searchBtn=document.querySelector('#search')
let search=document.querySelector('#searchBox');
let searchClose=document.querySelector('.fa-xmark');
searchBtn.addEventListener('click',()=>{
    if(search.style.opacity=='1' && search.style.visibility=='visible'){
        search.style.opacity='0'
        search.style.visibility='hidden'
    }
    else{
        search.style.opacity='1';
        search.style.visibility='visible'
    }
})
searchClose.addEventListener('click',()=>{
        search.style.opacity='0'
        search.style.visibility='hidden'
})

let mobileMenu=document.querySelector('#mobileMenu');
let clickMenu=document.querySelector('.fa-bars');
clickMenu.addEventListener('click',()=>{
    mobileMenu.classList.toggle('w-100')
    clickMenu.classList.toggle('fa-x')
})