const nav = document.querySelector(".nav");
burger = document.querySelector(".burger");
menu = document.querySelector(".menu");
body = document.querySelector("body");
links = document.querySelectorAll(".nav-link");

burger.addEventListener("click", () => {
  nav.classList.toggle("open");
  menu.classList.toggle("menu-open");
});

body.addEventListener("click", (e) => {
  let clickedEl = e.target;
  console.log(clickedEl);
  if (
    !clickedEl.classList.contains("burger") &&
    !clickedEl.classList.contains("menu-items") &&
    !clickedEl.classList.contains("line")
  ) {
    nav.classList.remove("open");
    menu.classList.remove("menu-open");
  }
});

if (links.length) {
  links.forEach((link) => {
    link.addEventListener("click", () => {
      links.forEach((link) => {
        link.classList.remove("active");
      });
      link.classList.add("active");
    });
  });
}
