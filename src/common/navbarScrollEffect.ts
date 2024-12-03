export default function navbarScroll(
  navbar: HTMLElement | null,
  outley: HTMLElement | null,
  isTransparent: boolean
) {
  if (!navbar || !outley) return;

  if (window.scrollY > 40) {
    navbar.classList.add("nav-scroll");
    outley.classList.add("show");
    if (isTransparent) navbar.classList.remove("bg-transparent");
  } else {
    navbar.classList.remove("nav-scroll");
    outley.classList.remove("show");
    if (isTransparent) navbar.classList.add("bg-transparent");
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("nav-scroll");
      outley.classList.add("show");
      if (isTransparent) navbar.classList.remove("bg-transparent");
    } else {
      navbar.classList.remove("nav-scroll");
      outley.classList.remove("show");
      if (isTransparent) navbar.classList.add("bg-transparent");
    }
  });
}
