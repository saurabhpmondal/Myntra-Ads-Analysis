const btn = document.getElementById("openFilter");
const modal = document.getElementById("filterModal");

btn.onclick = () => {
  modal.classList.toggle("hidden");
};

document.getElementById("applyFilter").onclick = () => {
  modal.classList.add("hidden");
};