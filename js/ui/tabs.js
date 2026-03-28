document.querySelectorAll(".tab").forEach(tab=>{
  tab.onclick = ()=>{
    document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
    tab.classList.add("active");
  }
});