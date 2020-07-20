const hamburger = document.querySelector(".ham");
const navLinks = document.querySelector(".puru");
const links = document.querySelectorAll(".puru li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.addEventListener("click", (e) => {
  if (e.target.classList.contains("model")) {
    navLinks.classList.remove("open");
    original.classList.remove("open");
  }
});
