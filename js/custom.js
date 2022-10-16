const menuBtn = document.querySelector("#menuBtn");
const navbar = document.querySelector(".navbar");
menuBtn.onclick = function () {
  navbar.classList.toggle("active");
};
