const metrics = ["Impressions","Clicks","CTR","Units Sold","Revenue","Spend","ROI"];

function bindMetric(id) {
  const el = document.getElementById(id);

  el.onclick = () => {
    const choice = prompt(metrics.join("\n"));
    if(choice) el.innerHTML = `<span class="dot"></span> ${choice} ▼`;
  };
}

bindMetric("metricA");
bindMetric("metricB");