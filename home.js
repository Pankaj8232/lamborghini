let menu = document.querySelector(".menu");
let menulist = document.querySelector(".menulist");
let openlist = document.querySelector("#openlist");
let closelist = document.querySelector("#closelist");
openlist.addEventListener("click", function () {
  menulist.style.display = "block";
  closelist.style.display = "block";
  openlist.style.display = "none";
});

closelist.addEventListener("click", function () {
  menulist.style.display = "none";
  closelist.style.display = "none";
  openlist.style.display = "block";
});

let abouturus2 = document.querySelector(".abouturus2");
let popupurus2 = document.querySelector(".popupurus2");
let overlap = document.querySelector(".overlap");
abouturus2.addEventListener("click", function () {
  popupurus2.style.display = "block";
  overlap.style.display = "block";
});

let popupclose = document.querySelector("#popupclose");
popupclose.addEventListener("click", function () {
  popupurus2.style.display = "none";
  overlap.style.display = "none";
});

let section1 = document.querySelector(".section1");
let section2 = document.querySelector(".section2");
let section3 = document.querySelector(".section3");
let section4 = document.querySelector(".section4");

function section1b() {
  section1.style.display = "block";
  section2.style.display = "none";
  section3.style.display = "none";
  section4.style.display = "none";
}

function section2b() {
  section1.style.display = "none";
  section2.style.display = "block";
  section3.style.display = "none";
  section4.style.display = "none";
}

function section3b() {
  section1.style.display = "none";
  section2.style.display = "none";
  section3.style.display = "block";
  section4.style.display = "none";
}

function section4b() {
  section1.style.display = "none";
  section2.style.display = "none";
  section3.style.display = "none";
  section4.style.display = "block";
}

let data = [];
async function getproducts() {
  let apilink = await fetch("http://localhost:3000/products");
  data = await apilink.json();
  let products = document.querySelector(".products");
  for (let i = 0; i < data.length; i++) {
    products.innerHTML += `
        <div class="products1">
        <div><img src="${data[i].img}" alt="picture not found"/></div>
        <h3>${data[i].date}</h3>
        <h4>${data[i].heading}</h4>
        </div>        
        `;
  }
}
getproducts();


let closeask=document.querySelector("#closeask")
let ask=document.querySelector(".ask")
function closeask1(){
  ask.style.display="none"
}

function openask(){
  ask.style.display="block"
}


let search=document.querySelector(".search")
function searchbar(){
  search.style.display="block"
}

let searchclose=document.querySelector("#searchclose")
function closesearch(){
  search.style.display="none"
}
