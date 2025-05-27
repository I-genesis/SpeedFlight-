



const menu=document.getElementById("menu");
const mainbotton = document.getElementById("toge");
const listmenu=document.querySelector("ul");
// const place=document.getElementById("btnplace", "btnplace1", "btnplace2", "btnplace3", "btnplace4", "btnplace5");
const booking=document.getElementById("place1");

menu.addEventListener("click", () => {
    mainbotton.classList.toggle("active")
}) 
booking.addEventListener("click", () => {
    place.classList.toggle("active")
})


