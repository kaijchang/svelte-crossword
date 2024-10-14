function pad (s, len) {
  return s.padStart(len, "0");
};

export default function formatTime(timeElapsed) {
  const h = Math.floor(timeElapsed / 1000 / 3600);
  const m = Math.floor((timeElapsed / 1000 % 3600) / 60);
  const s = Math.floor(timeElapsed / 1000 % 60);

  return `${h > 0 ? h.toString().concat(":") : ""}${pad(m.toString(), h > 0 ? 2 : 1).concat(":")}${pad(s.toString(), 2)}`;
};