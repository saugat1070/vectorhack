import React from "react";
import { useScrollPosition } from "../../hooks";

const ScrollToTop = () => {
  const { isScrolled } = useScrollPosition(500);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`fixed bottom-8 right-8 z-999 h-12 w-12 rounded-xl bg-[linear-gradient(135deg,#005b96_0%,#513c97_100%)] text-2xl text-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,91,150,0.4)] ${
        isScrolled ? "visible opacity-100" : "invisible opacity-0"
      }`}
      aria-label="Scroll to top"
      onClick={scrollToTop}
    >
      ↑
    </button>
  );
};

export default ScrollToTop;
