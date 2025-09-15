import { useEffect, useState, type RefObject, type MutableRefObject } from "react";

export function useScrollPercentage<T extends HTMLElement>(
  ref: RefObject<T> | MutableRefObject<T | null>
) {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollTop = el.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      const scrolled = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollPercent(scrolled);
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return scrollPercent;
}
