export default function Countdown() {
  document.addEventListener("readystatechange", (event: Event) => {
    if ((event.target as Document).readyState === "complete") {
      const clockdiv = document.getElementsByClassName(
        "clockdiv"
      ) as HTMLCollectionOf<HTMLElement>;
      const countDownDate: { [key: string]: any }[] = [];
      for (let i = 0; i < clockdiv.length; i++) {
        countDownDate[i] = {};
        countDownDate[i]["el"] = clockdiv[i];
        countDownDate[i]["time"] = new Date(
          clockdiv[i].getAttribute("data-date")!
        ).getTime();
        countDownDate[i]["days"] = 0;
        countDownDate[i]["hours"] = 0;
        countDownDate[i]["seconds"] = 0;
        countDownDate[i]["minutes"] = 0;
      }

      const countdownfunction = setInterval(() => {
        for (let i = 0; i < countDownDate.length; i++) {
          const now = new Date().getTime();
          const distance = countDownDate[i]["time"] - now;
          countDownDate[i]["days"] = Math.floor(
            distance / (1000 * 60 * 60 * 24)
          );
          countDownDate[i]["hours"] = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          countDownDate[i]["minutes"] = Math.floor(
            (distance % (1000 * 60 * 60)) / (1000 * 60)
          );
          countDownDate[i]["seconds"] = Math.floor(
            (distance % (1000 * 60)) / 1000
          );

          if (distance < 0) {
            countDownDate[i]["el"].querySelector(".days")!.innerHTML = "0";
            countDownDate[i]["el"].querySelector(".hours")!.innerHTML = "0";
            countDownDate[i]["el"].querySelector(".minutes")!.innerHTML = "0";
            countDownDate[i]["el"].querySelector(".seconds")!.innerHTML = "0";
          } else {
            countDownDate[i]["el"].querySelector(".days")!.innerHTML = String(
              countDownDate[i]["days"]
            );
            countDownDate[i]["el"].querySelector(".hours")!.innerHTML = String(
              countDownDate[i]["hours"]
            );
            countDownDate[i]["el"].querySelector(".minutes")!.innerHTML =
              String(countDownDate[i]["minutes"]);
            countDownDate[i]["el"].querySelector(".seconds")!.innerHTML =
              String(countDownDate[i]["seconds"]);
          }
        }
      }, 1000);
    }
  });
}
