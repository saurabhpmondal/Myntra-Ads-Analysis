export function initDropdown() {

  const a = document.querySelector(".metric-a");
  const b = document.querySelector(".metric-b");

  a.addEventListener("change", () => {
    [...b.options].forEach(o => o.disabled = false);

    const selected = a.value;

    [...b.options].forEach(o => {
      if (o.value === selected) o.disabled = true;
    });
  });
}