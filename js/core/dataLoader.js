import { DATA_URLS } from "./config.js";

export async function loadAllData() {
  const datasets = {};

  for (const key in DATA_URLS) {
    const res = await fetch(DATA_URLS[key]);
    const text = await res.text();
    datasets[key] = parseCSV(text);
  }

  return datasets;
}

function parseCSV(text) {
  const rows = text.split("\n").map(r => r.split(","));
  const headers = rows[0];

  return rows.slice(1).map(row => {
    const obj = {};
    headers.forEach((h, i) => {
      obj[h.trim()] = row[i];
    });
    return obj;
  });
}