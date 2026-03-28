export function initFilter() {
  const btn = document.querySelector(".filter-btn");
  const dropdown = document.querySelector(".filter-dropdown");

  btn.onclick = () => dropdown.classList.toggle("hidden");
}