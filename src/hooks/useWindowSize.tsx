import { useState, useEffect } from "react";

interface WindowSize {
  width: undefined | number,
  height: undefined | number,
}

/**
 * A hook that tracks the current window size.
 * Copied from https://usehooks.com/useWindowSize/
 * @returns an object with the window's current width and height in px
 */
function useWindowSize() {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export default useWindowSize;