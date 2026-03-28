const options = ["Impressions","Clicks","CTR","Units Sold","Revenue","Spend","ROI"];

function createDropdown(el) {
  el.onclick = () => {
    const value = prompt("Select Metric:\n" + options.join("\n"));
    if(value) el.innerText = value + " ▼";
  };
}

createDropdown(document.getElementById("metricA"));
createDropdown(document.getElementById("metricB"));