document.getElementById("searchBtn").onclick = () => {
  const popup = document.getElementById("productPopup");
  popup.classList.remove("hidden");

  popup.innerHTML = `
    <h3>Product</h3>
    <div>⭐ 4.2</div>
    <div>Sales: --</div>
  `;
};