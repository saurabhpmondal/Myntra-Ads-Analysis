import { getData } from "../core/dataStore.js";

let chart;

export function renderChart(metricA = "Spend", metricB = "Revenue") {

  const data = getData().CDR;

  if (!data || data.length === 0) return;

  // group by date
  const grouped = {};

  data.forEach(r => {
    const key = r.dateObj.toISOString().split("T")[0];

    if (!grouped[key]) {
      grouped[key] = {
        impressions: 0,
        clicks: 0,
        spend: 0,
        revenue: 0,
        units: 0
      };
    }

    grouped[key].impressions += r.impressions;
    grouped[key].clicks += r.clicks;
    grouped[key].spend += r.spend;
    grouped[key].revenue += r.revenue;
    grouped[key].units += r.units;
  });

  const labels = Object.keys(grouped).sort();

  const mapMetric = (m, obj) => {
    switch (m) {
      case "Impressions": return obj.impressions;
      case "Clicks": return obj.clicks;
      case "CTR": return obj.clicks / obj.impressions || 0;
      case "Units": return obj.units;
      case "Revenue": return obj.revenue;
      case "Spend": return obj.spend;
      case "ROI": return obj.revenue / obj.spend || 0;
    }
  };

  const dataA = labels.map(d => mapMetric(metricA, grouped[d]));
  const dataB = labels.map(d => mapMetric(metricB, grouped[d]));

  if (chart) chart.destroy();

  chart = new Chart(document.getElementById("mainChart"), {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: metricA,
          data: dataA,
          borderWidth: 2,
          tension: 0.3
        },
        {
          label: metricB,
          data: dataB,
          borderWidth: 2,
          tension: 0.3
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: "top" }
      }
    }
  });
}