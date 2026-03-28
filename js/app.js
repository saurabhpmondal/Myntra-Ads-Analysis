import { loadAllData } from "./core/dataLoader.js";
import { normalizeCDR, normalizeGeneric } from "./core/dataParser.js";
import { setData } from "./core/dataStore.js";

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

  console.log("Data Loaded:", parsed);
});