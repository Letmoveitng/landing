import { useEffect, useState } from "react";

export default function useHeaderColor(defaultColor: "black" | "white" = "black") {
  const [color, setColor] = useState(defaultColor);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("div[data-bg]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the top of the section hits the top of viewport
          if (entry.isIntersecting && entry.boundingClientRect.top <= 0) {
            const bg = entry.target.dataset.bg;
            if (bg === "dark") setColor("white");
            else setColor("black");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -100% 0px", // trigger when top reaches viewport top
        threshold: 0, // top of element
      }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  return color;
}
