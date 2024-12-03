import { useEffect, useState } from "react";

const useBodyBlockScroll = () => {
  const [isLock, setIsLock] = useState(false);
  const isClient = typeof window !== "undefined";

  if (!isClient) {
    return { isLock: false, toggle: () => {} };
  }

  const bodyE = document.body;
  const navbar = document.querySelector(".navbar") as HTMLElement;

  useEffect(() => {
    window.addEventListener("resize", function () {
      if (window.innerWidth > 991) {
        setIsLock(false);
      }
    });
  }, []);

  useEffect(() => {
    const scrollPosition = window.scrollY;
    if (isLock) {
      bodyE.classList.add("overflow_hiden");
      navbar.classList.add("nav_open");
      window.scrollTo(0, scrollPosition);
    } else {
      bodyE.classList.remove("overflow_hiden");
      navbar.classList.remove("nav_open");
    }
  }, [isLock, bodyE]);

  const toggle = () => setIsLock(!isLock);

  return { isLock, toggle };
};

export default useBodyBlockScroll;
