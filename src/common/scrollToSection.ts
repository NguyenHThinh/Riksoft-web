export default function scrollToSection(
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) {
  event.preventDefault();

  const target = event.target as HTMLElement;
  const scrollNav = target.dataset.scrollNav;

  if (!scrollNav) return;

  const section = document.querySelector<HTMLElement>(
    `[data-scroll-index="${scrollNav}"]`
  );

  if (section) {
    setTimeout(() => {
      section.scrollIntoView({ behavior: "smooth" });
    }, 300);
  }
}
