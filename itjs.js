let fastUpBtn = document.querySelector("#fstUpBtn");
let fstList = document.querySelector(".fst-list");
let fstDownBtn = document.querySelector("#fstDownBtn");

fstDownBtn.addEventListener('click', () => {
    fastUpBtn.style.display = "block"
    fstList.style.display = "block"
    fstDownBtn.style.display = "none"
})
let offbtn = () => {
    fastUpBtn.style.display = "none"
    fstList.style.display = "none"
    fstDownBtn.style.display = "block"
}
fastUpBtn.addEventListener('click', offbtn);


let clossList = document.querySelector("#clossList");
let opanList = document.querySelector("#opanList");
let nav = document.querySelectorAll(".nav-list");

opanList.addEventListener('click',()=>{
    nav.forEach(navList_el => navList_el.classList.add('visibale'))        
    
})
clossList.addEventListener('click',()=>{
    nav.forEach(navList_el => navList_el.classList.remove('visibale'))
})