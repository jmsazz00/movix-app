import { useCallback } from "react";

const useScrollToTop = (smooth: boolean = true) => {
  const scrollToTop = useCallback(() => {
    window.scroll({
      top: 0,
      behavior: smooth ? "smooth" : "auto",
    });
  }, [smooth]);

  return scrollToTop;
};

export default useScrollToTop;
