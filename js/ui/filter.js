const btn = document.querySelector(".filter-btn");
const panel = document.querySelector(".filter-panel");

btn.onclick = () => {
  panel.classList.toggle("hidden");
};