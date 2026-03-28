export function calculateKPIs(data) {
  let impressions = 0;
  let clicks = 0;
  let spend = 0;
  let revenue = 0;
  let units = 0;

  data.forEach(r => {
    impressions += r.impressions;
    clicks += r.clicks;
    spend += r.spend;
    revenue += r.revenue;
    units += r.units;
  });

  return {
    impressions,
    clicks,
    ctr: clicks / impressions || 0,
    cvr: units / clicks || 0,
    spend,
    revenue,
    roi: revenue / spend || 0
  };
}