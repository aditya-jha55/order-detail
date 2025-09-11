// import { useEffect, useRef, useState } from 'react';

// interface UseHideOnScrollOptions {
//   threshold?: number;
//   dependencies?: any[];
// }

// export function useHideOnScroll(
//   ref: React.RefObject<HTMLElement>,
//   options?: UseHideOnScrollOptions
// ): boolean {
//   const [isVisible, setIsVisible] = useState(true);
//   const { threshold = 50, dependencies = [] } = options || {};
//   const lastScrollTop = useRef(0);

//   useEffect(() => {
//     const scroller = ref.current;
//     if (!scroller) {
//       const observer = new MutationObserver(() => {
//         if (ref.current) {
//           setupScrollListener();
//           observer.disconnect();
//         }
//       });
//       observer.observe(document.body, { childList: true, subtree: true });
//       return () => observer.disconnect();
//     }

//     const isScrollable = scroller.scrollHeight > scroller.clientHeight;

//     const handleScroll = () => {
//       const currentScrollTop = scroller.scrollTop;
//       if (currentScrollTop > lastScrollTop.current && currentScrollTop > threshold) {
//         setIsVisible(false);
//       } else if (currentScrollTop < lastScrollTop.current) {
//         setIsVisible(true);
//       }
//       lastScrollTop.current = Math.max(currentScrollTop, 0);
//     };

//     const handleTouchMove = () => {
//       // Optional: touch feedback for debugging
//     };

//     const setupScrollListener = () => {
//       scroller.addEventListener('scroll', handleScroll, { passive: true });
//       scroller.addEventListener('touchmove', handleTouchMove, { passive: true });

//       return () => {
//         scroller.removeEventListener('scroll', handleScroll);
//         scroller.removeEventListener('touchmove', handleTouchMove);
//       };
//     };

//     let cleanup: (() => void) | undefined;
//     if (isScrollable) {
//       cleanup = setupScrollListener();
//     }

//     return () => {
//       if (cleanup) cleanup();
//     };
//   }, [ref, threshold, ...dependencies]);

//   return isVisible;
// }


import { useEffect, useRef, useState } from 'react';

interface UseHideOnScrollOptions {
  downThreshold?: number;      // Scroll past this to hide
  scrollUpThreshold?: number;  // Scroll up this much to show
  dependencies?: any[];
}

export function useHideOnScroll(
  ref: React.RefObject<HTMLElement>,
  options?: UseHideOnScrollOptions
): boolean {
  const [isVisible, setIsVisible] = useState(true);
  const { downThreshold = 50, scrollUpThreshold = 300, dependencies = [] } = options || {};
  const lastScrollTop = useRef(0);
  const hideAt = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const scroller = ref.current;

    const handleScroll = () => {
      if (!scroller) return;

      const currentScrollTop = scroller.scrollTop;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const scrollDiff = currentScrollTop - lastScrollTop.current;

          if (scrollDiff > 0 && currentScrollTop > downThreshold) {
            // Scrolling down: hide header
            setIsVisible(false);
            hideAt.current = currentScrollTop;
          } else if (
            scrollDiff < 0 &&
            hideAt.current - currentScrollTop > scrollUpThreshold
          ) {
            // Scrolling up significantly: show header
            setIsVisible(true);
          }

          lastScrollTop.current = currentScrollTop <= 0 ? 0 : currentScrollTop;
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    const setupScrollListener = () => {
      if (!scroller || scroller.scrollHeight <= scroller.clientHeight) return;
      scroller.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        scroller.removeEventListener('scroll', handleScroll);
      };
    };

    const cleanup = setupScrollListener();

    const observer = new MutationObserver(() => {
      if (ref.current) {
        setupScrollListener();
        observer.disconnect();
      }
    });

    if (!ref.current) {
      observer.observe(document.body, { childList: true, subtree: true });
    }

    return () => {
      if (cleanup) cleanup();
      observer.disconnect();
    };
  }, [ref, downThreshold, scrollUpThreshold, ...dependencies]);

  return isVisible;
}
