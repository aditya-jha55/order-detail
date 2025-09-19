import { useEffect, useState } from "react";

// ========== detect top hook ==========
const useStickyHeaderIndexes = (
  scrollContainerRef: React.RefObject<HTMLElement | null>,
  stickySelector: string = "thead.fixedSetNameRow",
  stickyTop: number = 90
) => {
  const [stuckIndexes, setStuckIndexes] = useState<number[]>([]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const stuck: number[] = [];
      container.querySelectorAll<HTMLElement>(stickySelector).forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        // compare relative to container
        const topRelative = rect.top - containerRect.top;

        if (topRelative >= stickyTop - 2 && topRelative <= stickyTop + 2) {
          stuck.push(index);
          el.classList.add("is-stuck");
        } else {
          el.classList.remove("is-stuck");
        }
      });
      setStuckIndexes(stuck);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once

    return () => container.removeEventListener("scroll", handleScroll);
  }, [scrollContainerRef, stickySelector, stickyTop]);

  return stuckIndexes;
};

export default useStickyHeaderIndexes
// ===========detect top element hook============