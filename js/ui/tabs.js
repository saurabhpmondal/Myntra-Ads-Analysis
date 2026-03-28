function initTabs() {
  const tabs = document.querySelectorAll(".tab");
  const content = document.getElementById("contentArea");

  tabs.forEach(tab => {
    tab.onclick = () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      content.innerHTML = `<div>${tab.dataset.tab} view</div>`;
    };
  });
}