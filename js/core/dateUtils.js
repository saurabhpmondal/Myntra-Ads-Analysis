export function parseDate(value) {
  if (!value) return null;

  const str = value.toString();

  const year = parseInt(str.substring(0, 4));
  const month = parseInt(str.substring(4, 6)) - 1;
  const day = parseInt(str.substring(6, 8));

  return new Date(year, month, day);
}

export function formatDate(date) {
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}

export function getMonthKey(date) {
  const y = date.getFullYear();
  const m = (date.getMonth() + 1).toString().padStart(2, "0");
  return `${y}-${m}`;
}