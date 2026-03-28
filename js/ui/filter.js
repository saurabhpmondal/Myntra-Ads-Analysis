const modal = document.getElementById("filterModal");

document.getElementById("openFilter").onclick = () => {
  modal.classList.toggle("hidden");
};

function buildCalendar(container, year, month) {

  const monthName = new Date(year, month).toLocaleString("default", {
    month: "long",
    year: "numeric"
  });

  container.innerHTML = `
    <div class="month-title">${monthName}</div>
    <div class="week-header">
      <div>Sun</div><div>Mon</div><div>Tue</div>
      <div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
    </div>
    <div class="days-grid"></div>
  `;

  const grid = container.querySelector(".days-grid");

  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < firstDay; i++) {
    grid.appendChild(document.createElement("div"));
  }

  for (let d = 1; d <= totalDays; d++) {
    const el = document.createElement("div");
    el.className = "day";
    el.innerText = d;
    grid.appendChild(el);
  }
}

buildCalendar(document.getElementById("cal1"), 2026, 2);
buildCalendar(document.getElementById("cal2"), 2026, 3);

document.getElementById("applyFilter").onclick = () => {
  modal.classList.add("hidden");
};