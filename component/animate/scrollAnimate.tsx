import { useEffect } from "react";

type AnimateConfig = {
  targetClass: string;        // class to select
  animationClasses: string;   // classes to add when visible (e.g., "opacity-100 translate-y-0")
};

export default function useMultiScrollAnimate(configs: AnimateConfig[]) {
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    configs.forEach(({ targetClass, animationClasses }) => {
      const elements = document.querySelectorAll<HTMLElement>(`.${targetClass}`);

      elements.forEach(el => {
        // store the initial classes to restore later
        const initialClasses = Array.from(el.classList);

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                // reset to initial, remove only opacity/translate classes
                const resetClasses = initialClasses.filter(cls => !cls.startsWith("opacity-") && !cls.startsWith("translate-"));
                el.className = resetClasses.join(" ");

                // add animation classes
                el.classList.add(...animationClasses.split(" "));
              } else {
                // restore initial classes (back to hidden)
                el.className = initialClasses.join(" ");
              }
            });
          },
          { threshold: 0.1 }
        );

        observer.observe(el);
        observers.push(observer);
      });
    });

    return () => observers.forEach(obs => obs.disconnect());
  }, [configs]);
}
