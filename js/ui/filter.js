const btn = document.getElementById("openFilter");
const modal = document.getElementById("filterModal");

let currentMonth = new Date(2026, 2); // March 2026

let startDate = null;
let endDate = null;

btn.onclick = () => modal.classList.toggle("hidden");

function renderCalendars() {
  const calendars = document.querySelectorAll(".calendar");

  calendars.forEach((cal, i) => {
    const date = new Date(currentMonth);
    date.setMonth(currentMonth.getMonth() + i);

    cal.dataset.year = date.getFullYear();
    cal.dataset.month = date.getMonth();

    generateCalendar(cal, date.getFullYear(), date.getMonth());
  });
}

function generateCalendar(container, year, month) {

  container.innerHTML = "";

  // HEADER
  const header = document.createElement("div");
  header.className = "month-header";

  header.innerHTML = `
    <span class="nav-btn prev">◀</span>
    <span class="month-title">
      ${new Date(year, month).toLocaleString("default",{month:"long",year:"numeric"})}
    </span>
    <span class="nav-btn next">▶</span>
  `;

  container.appendChild(header);

  // NAVIGATION
  header.querySelector(".prev").onclick = () => {
    currentMonth.setMonth(currentMonth.getMonth() - 1);
    renderCalendars();
  };

  header.querySelector(".next").onclick = () => {
    currentMonth.setMonth(currentMonth.getMonth() + 1);
    renderCalendars();
  };

  // WEEK HEADER
  const week = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const weekDiv = document.createElement("div");
  weekDiv.className = "weekdays";

  week.forEach(d => {
    const el = document.createElement("div");
    el.innerText = d;
    weekDiv.appendChild(el);
  });

  container.appendChild(weekDiv);

  // GRID
  const grid = document.createElement("div");
  grid.className = "days-grid";

  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < firstDay; i++) {
    grid.appendChild(document.createElement("div"));
  }

  const today = new Date();

  for (let d = 1; d <= totalDays; d++) {

    const day = document.createElement("div");
    day.className = "day";
    day.innerText = d;

    const date = new Date(year, month, d);

    // Disable future dates
    if (date > today) {
      day.classList.add("disabled");
    }

    day.onclick = () => handleClick(date);

    grid.appendChild(day);
  }

  container.appendChild(grid);

  highlight();
}

function handleClick(date) {

  if (!startDate || (startDate && endDate)) {
    startDate = date;
    endDate = null;
  } else {
    endDate = date;
    if (endDate < startDate) {
      [startDate, endDate] = [endDate, startDate];
    }
  }

  highlight();
}

function highlight() {

  document.querySelectorAll(".day").forEach(el => {
    el.className = "day";
  });

  document.querySelectorAll(".calendar").forEach(cal => {

    const year = cal.dataset.year;
    const month = cal.dataset.month;

    cal.querySelectorAll(".day").forEach(day => {

      const d = parseInt(day.innerText);
      const date = new Date(year, month, d);

      if (!startDate) return;

      if (date.getTime() === startDate.getTime()) {
        day.classList.add("range-start");
      }

      if (endDate && date.getTime() === endDate.getTime()) {
        day.classList.add("range-end");
      }

      if (endDate && date > startDate && date < endDate) {
        day.classList.add("range");
      }
    });
  });
}

renderCalendars();

document.getElementById("applyFilter").onclick = () => {
  modal.classList.add("hidden");
};