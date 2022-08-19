let button = document.getElementById("btn");
let img = document.getElementById("img");
let btnt = document.getElementById("btnT");
let image = document.getElementById("imgT");

button.addEventListener("click",function(){
    img.classList.toggle("active");
})
btnt.addEventListener("click",function(){
    image.classList.toggle("activeT");
})
