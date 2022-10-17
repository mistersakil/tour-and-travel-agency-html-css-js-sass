/**
 * Theme change
 */
const body = document.querySelector("body");
const themeChangeIcon = document.querySelector("#themeChangeIcon");

themeChangeIcon.onclick = function (event) {
  let iconClassList = event.target.classList;
  if (iconClassList.contains("fa-moon")) {
    iconClassList.add("fa-sun");
    iconClassList.remove("fa-moon");
  } else {
    iconClassList.add("fa-moon");
    iconClassList.remove("fa-sun");
  }
  console.log(iconClassList);
  body.classList.toggle("light");
};

/**
 * Mobile menu toggle
 */
const menuBtn = document.querySelector("#menuBtn");
const navbar = document.querySelector(".navbar");
menuBtn.onclick = function () {
  navbar.classList.toggle("active");
};
