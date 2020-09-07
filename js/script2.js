let sq7 = document.querySelector("#square7");
let sq8 = document.querySelector("#square8");
let sq11 = document.querySelector("#square11");
let sh1 = document.querySelector("#shape1");


window.addEventListener("load", startAnimation);

function startAnimation(){
    console.log("startAnimation");
    sq7.classList.add("grow");
    sq8.classList.add("grow");
    sq11.classList.add("grow");
    sh1.classList.add("shape1Animation");

}
