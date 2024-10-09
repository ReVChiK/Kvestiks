var appendNull = function (t) {
  return t < 10 ? 0 + t.toString() : t;
};

export function correctDate(n) {
  const d = new Date();
  const p = new Date(d.getTime() + 864e5 * (n + 1));
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];
  return (
    appendNull(p.getDate() - 1) +
    " " +
    months[p.getMonth()] +
    " " +
    p.getFullYear()
  );
}
