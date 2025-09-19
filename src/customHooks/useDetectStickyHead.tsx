// import { useEffect, useState } from "react";

import { useEffect, useState } from "react";

// // ========== detect top hook ==========
const useStickyHeaderIndexes = (
  scrollContainerRef: React.RefObject<HTMLElement | null>,
  stickySelector: string = "thead.fixedSetNameRow",
  stickyTop: number = 90
) => {
  const [stuckIndexes, setStuckIndexes] = useState<number[]>([]);
console.log(stickyTop)
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
// // ===========detect top element hook============
// type OffsetConfig = number | { [key: string]: number; default: number };

// function getOffset(config: OffsetConfig): number {
//   if (typeof config === "number") return config;

//   const width = window.innerWidth;

//   // collect numeric keys
//   const breakpoints = Object.keys(config)
//     .filter(k => k !== "default")
//     .map(k => Number(k))
//     .filter(n => !isNaN(n));

//   // find largest breakpoint <= width
//   const bp = breakpoints
//     .filter(b => b <= width)
//     .sort((a, b) => b - a)[0];

//   // debugging log
//   console.log("width:", width, "bp:", bp, "offset:", bp ? config[bp] : config.default);

//   return bp ? config[bp] : config.default;
// }


// export default function useStickyHeaderIndexes(
//   containerRef: RefObject<HTMLElement | null>,
//   selector: string,
//   offsetConfig: OffsetConfig = 0
// ) {
//   const [stuckIndexes, setStuckIndexes] = useState<number[]>([]);
//   const [offset, setOffset] = useState(() => getOffset(offsetConfig));

//   useEffect(() => {
//     const updateOffset = () => setOffset(getOffset(offsetConfig));
//     window.addEventListener("resize", updateOffset);
//     updateOffset();
//     return () => window.removeEventListener("resize", updateOffset);
//   }, [offsetConfig]);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const headers = Array.from(container.querySelectorAll<HTMLElement>(selector));

//     const handleScroll = () => {
//       const stuck: number[] = [];
//       headers.forEach((el, index) => {
//         const rect = el.getBoundingClientRect();
//         const containerRect = container.getBoundingClientRect();
//         if (rect.top <= containerRect.top + offset && rect.bottom > containerRect.top + offset) {
//           stuck.push(index);
//         }
//       });
//       setStuckIndexes(stuck);
//     };

//     container.addEventListener("scroll", handleScroll);
//     handleScroll();

//     return () => container.removeEventListener("scroll", handleScroll);
//   }, [containerRef, selector, offset]);

//   return stuckIndexes;
// }
