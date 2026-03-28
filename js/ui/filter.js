const btn = document.getElementById("openFilter");
const modal = document.getElementById("filterModal");

let startDate = null;
let endDate = null;

btn.onclick = () => {
  modal.classList.toggle("hidden");
};

function createWeekHeader(container) {
  const week = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const div = document.createElement("div");
  div.className = "weekdays";

  week.forEach(d => {
    const el = document.createElement("div");
    el.innerText = d;
    div.appendChild(el);
  });

  container.appendChild(div);
}

function generateCalendar(container, year, month) {

  container.innerHTML = `
    <div class="month">${new Date(year, month).toLocaleString("default",{month:"long",year:"numeric"})}</div>
  `;

  createWeekHeader(container);

  const grid = document.createElement("div");
  grid.className = "days-grid";

  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < firstDay; i++) {
    grid.appendChild(document.createElement("div"));
  }

  for (let d = 1; d <= totalDays; d++) {
    const day = document.createElement("div");
    day.className = "day";
    day.innerText = d;

    const date = new Date(year, month, d);

    day.onclick = () => handleDateClick(date);

    grid.appendChild(day);
  }

  container.appendChild(grid);
}

function handleDateClick(date) {

  if (!startDate || (startDate && endDate)) {
    startDate = date;
    endDate = null;
  } else {
    endDate = date;
    if (endDate < startDate) {
      [startDate, endDate] = [endDate, startDate];
    }
  }

  highlightRange();
}

function highlightRange() {
  document.querySelectorAll(".day").forEach(el => {
    el.classList.remove("selected","range");
  });

  document.querySelectorAll(".calendar").forEach(cal => {
    const days = cal.querySelectorAll(".day");

    days.forEach(day => {
      const d = parseInt(day.innerText);
      const month = cal.dataset.month;
      const year = cal.dataset.year;

      const date = new Date(year, month, d);

      if (startDate && date.getTime() === startDate.getTime()) {
        day.classList.add("selected");
      }

      if (endDate && date.getTime() === endDate.getTime()) {
        day.classList.add("selected");
      }

      if (startDate && endDate && date > startDate && date < endDate) {
        day.classList.add("range");
      }
    });
  });
}

/* INIT */
const calendars = document.querySelectorAll(".calendar");

calendars[0].dataset.month = 2;
calendars[0].dataset.year = 2026;

calendars[1].dataset.month = 3;
calendars[1].dataset.year = 2026;

generateCalendar(calendars[0], 2026, 2);
generateCalendar(calendars[1], 2026, 3);

document.getElementById("applyFilter").onclick = () => {
  modal.classList.add("hidden");
};