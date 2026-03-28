import { parseDate, getMonthKey } from "./dateUtils.js";

export function normalizeCDR(data) {
  return data.map(row => {
    const date = parseDate(row.date);

    return {
      ...row,
      dateObj: date,
      monthKey: getMonthKey(date),

      impressions: +row.impressions || 0,
      clicks: +row.clicks || 0,
      spend: +row.ad_spend || 0,
      revenue: +row.total_revenue || 0,
      units: +row.units_sold_total || 0
    };
  });
}

export function normalizeGeneric(data) {
  return data.map(row => ({
    ...row,
    impressions: +row.impressions || 0,
    clicks: +row.clicks || 0,
    spend: +row.budget_spend || 0,
    revenue: +row.total_revenue || 0,
    units: +row.units_sold_total || 0
  }));
}