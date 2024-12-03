export default function parallaxie(selector: string) {
  let elementBg = document.querySelector<HTMLElement>(selector);

  if (!elementBg) return;

  let image = elementBg.getAttribute("data-background");
  let position = elementBg.getBoundingClientRect().top * 0.55;

  elementBg.style.backgroundImage = `url("${image}")`;
  elementBg.style.backgroundSize = "cover";
  elementBg.style.backgroundRepeat = "no-repeat";
  elementBg.style.backgroundAttachment = "fixed";
  elementBg.style.backgroundPosition = `center ${position}px`;

  window.addEventListener("scorll", () => {
    position = elementBg.getBoundingClientRect().top * 0.55;
    elementBg.style.backgroundPosition = `center ${position}px`;
  });
}
