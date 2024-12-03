export default function timer(date: number) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = hour * 24 * 7;

  let countDown = new Date(date).getTime();

  let x = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDown - now;

    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    if (!daysElement || !hoursElement || !minutesElement || !secondsElement) {
      clearInterval(x);
      return;
    }

    daysElement.innerText = String(Math.floor(distance / day));
    hoursElement.innerText = String(Math.floor((distance % day) / hour));
    minutesElement.innerText = String(Math.floor((distance % hour) / minute));
    secondsElement.innerText = String(Math.floor((distance % minute) / second));
  }, second);
}
