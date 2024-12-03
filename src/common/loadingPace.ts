const loadingPace = () => {
  let preloader = document.querySelector<HTMLSpanElement>("#preloader");
  //
  if (!preloader) return;

  if (document.body.classList.contains("pace-done")) {
    preloader.classList.add("isdone");
    return;
  }

  preloader.classList.add("isdone");

  return;


  // document.addEventListener("load", () => preloader.classList.add("isdone"));

  // // // @ts-ignore
  // if (typeof Pace === "undefined") return;
  //
  // // @ts-ignore
  // Pace.on("start", () => preloader.classList.remove("isdone"));
  //
  // // @ts-ignore
  // Pace.on("done", () => preloader.classList.add("isdone"));

};

export default loadingPace;
