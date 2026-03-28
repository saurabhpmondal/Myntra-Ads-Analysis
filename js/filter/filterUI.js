const btn = document.querySelector(".filter-btn");
const dropdown = document.querySelector(".filter-dropdown");

if (btn && dropdown) {
  btn.onclick = () => {
    dropdown.classList.toggle("hidden");
  };
}

/* BUILD CALENDAR */
function buildCalendar(container, year, month) {

  const monthName = new Date(year, month).toLocaleString("default", {
    month: "long",
    year: "numeric"
  });

  container.innerHTML = `
    <div class="month">${monthName}</div>
    <div class="week">
      <div>Sun</div><div>Mon</div><div>Tue</div>
      <div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
    </div>
    <div class="days"></div>
  `;

  const grid = container.querySelector(".days");

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

/* INIT */
const calendars = document.querySelectorAll(".calendar");

if (calendars.length >= 2) {
  buildCalendar(calendars[0], 2026, 2);
  buildCalendar(calendars[1], 2026, 3);
}