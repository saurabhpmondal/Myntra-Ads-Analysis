const metrics = ["Impressions","Clicks","CTR","Units","Revenue","Spend","ROI"];

function initDropdowns() {
  const A = document.getElementById("metricA");
  const B = document.getElementById("metricB");

  metrics.forEach(m => {
    A.add(new Option(m, m));
    B.add(new Option(m, m));
  });

  A.value = "Spend";
  B.value = "Revenue";

  A.addEventListener("change", () => sync(A, B));
  B.addEventListener("change", () => sync(B, A));

  sync(A, B);
}

function sync(primary, secondary) {
  [...secondary.options].forEach(opt => {
    opt.disabled = opt.value === primary.value;
  });
}