const btn = document.getElementById("openFilter");
const modal = document.getElementById("filterModal");

btn.onclick = () => {
  modal.classList.toggle("hidden");
};

// Generate calendar UI
function generateCalendar(container, year, month) {

  const daysGrid = container.querySelector(".days-grid");
  daysGrid.innerHTML = "";

  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  // Empty slots
  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement("div");
    daysGrid.appendChild(empty);
  }

  // Days
  for (let d = 1; d <= totalDays; d++) {
    const day = document.createElement("div");
    day.className = "day";
    day.innerText = d;

    day.onclick = () => {
      day.classList.toggle("selected");
    };

    daysGrid.appendChild(day);
  }
}

// INIT CALENDARS
const calendars = document.querySelectorAll(".calendar");

generateCalendar(calendars[0], 2026, 2); // March
generateCalendar(calendars[1], 2026, 3); // April

document.getElementById("applyFilter").onclick = () => {
  modal.classList.add("hidden");
};