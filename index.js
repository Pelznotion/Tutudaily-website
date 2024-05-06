document.querySelector(".ham-img").addEventListener("click", showNav);

function showNav() {
  document.querySelector(".nav__links").classList.toggle("show__links");
}
let allbtn = document.querySelectorAll("single-services");

let hover = (e) => {
  e.target.classList.add("hover");
};
let end = (e) => {
  e.target.classList.remove("hover");
};
allbtn.forEach((singleServices) => {
  singleServices.addEventListener("touchstart", hover);
  singleServices.addEventListener("touchend", end);
});
