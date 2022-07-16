const clock = document.querySelector("h2#clock");
const calendar = document.querySelector("h2#date");
const day_of_week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
clock.innerText = "00:00:00";

function setClock() {
  const date = new Date();
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const date_of_week = date.getDay();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  calendar.innerText = `${month}/${day}, ${year} (${day_of_week[date_of_week]})`;
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

setClock();
setInterval(setClock, 1000);
