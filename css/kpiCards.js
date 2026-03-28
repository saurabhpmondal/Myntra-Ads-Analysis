import { getData } from "../core/dataStore.js";
import { calculateKPIs } from "../core/metricEngine.js";

export function renderKPIs() {
  const data = getData();

  if (!data || !data.CDR) return;

  const kpi = calculateKPIs(data.CDR);

  const container = document.getElementById("kpiRow");

  container.innerHTML = `
    ${card("Impressions", format(kpi.impressions))}
    ${card("Clicks", format(kpi.clicks))}
    ${card("CTR", percent(kpi.ctr))}
    ${card("Units Sold", format(kpi.units))}
    ${card("Revenue", currency(kpi.revenue))}
    ${card("Spend", currency(kpi.spend))}
    ${card("ROI", kpi.roi.toFixed(2))}
  `;
}

function card(title, value) {
  return `
    <div class="kpi-card">
      <div class="kpi-title">${title}</div>
      <div class="kpi-value">${value}</div>
    </div>
  `;
}

function format(n) {
  return n.toLocaleString("en-IN");
}

function currency(n) {
  return "₹" + n.toLocaleString("en-IN");
}

function percent(n) {
  return (n * 100).toFixed(2) + "%";
}