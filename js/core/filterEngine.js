export function filterByDate(data, start, end) {
  return data.filter(row => {
    return row.dateObj >= start && row.dateObj <= end;
  });
}

export function getMonthsFromRange(start, end) {
  const months = new Set();

  let current = new Date(start);

  while (current <= end) {
    const key = `${current.getFullYear()}-${(current.getMonth()+1)
      .toString().padStart(2,"0")}`;

    months.add(key);
    current.setMonth(current.getMonth() + 1);
  }

  return [...months];
}

export function filterByMonth(data, months) {
  return data.filter(row => months.includes(row.month));
}