import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds: string[], offset = 100) {
  const [active, setActive] = useState<string>(sectionIds[0]);

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop - offset <= scrollY) {
          setActive(sectionIds[i]);
          return;
        }
      }
      setActive(sectionIds[0]);
    };

    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, [sectionIds, offset]);

  return active;
}
