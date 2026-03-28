import { initFilter } from "./ui/filter.js";
import { initTabs } from "./ui/tabs.js";
import { initDropdown } from "./ui/dropdown.js";

document.addEventListener("DOMContentLoaded", () => {
  initFilter();
  initTabs();
  initDropdown();
});