document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".btn-menu").addEventListener("click", () => {
    document.querySelector("nav.menu").classList.toggle("hidden");
  });
});
