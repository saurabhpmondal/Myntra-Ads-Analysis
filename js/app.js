import { loadAllData } from "./core/dataLoader.js";
import { normalizeCDR, normalizeGeneric } from "./core/dataParser.js";
import { setData } from "./core/dataStore.js";
import { renderKPIs } from "./ui/kpiCards.js";
import { renderChart } from "./ui/chart.js";

document.addEventListener("DOMContentLoaded", async () => {

  initDropdowns();
  initTabs();

  const raw = await loadAllData();

  const parsed = {
    CDR: normalizeCDR(raw.CDR),
    CPR: normalizeGeneric(raw.CPR),
    PPR: normalizeGeneric(raw.PPR),
    VIEWS: normalizeGeneric(raw.VIEWS)
  };

  setData(parsed);

  renderKPIs();

  // 🔥 Render chart default
  renderChart("Spend", "Revenue");
});