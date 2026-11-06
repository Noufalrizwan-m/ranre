import { useEffect, useRef, useState } from "react";
import { copy } from "../data/translations.js";

export default function Intro({ logoRef, onComplete, language }) {
  const mark = useRef(null);
  const [leaving, setLeaving] = useState(false);
  const complete = useRef(onComplete);
  complete.current = onComplete;

  useEffect(() => {
    let finished = false;
    let animation;
    let finishTimer;
    const finish = () => {
      if (finished) return;
      finished = true;
      complete.current();
    };
    const beginTimer = window.setTimeout(() => {
      const source = mark.current?.getBoundingClientRect();
      const target = logoRef.current?.getBoundingClientRect();
      if (!source || !target) {
        finish();
        return;
      }
      setLeaving(true);
      // Animate the measured rectangles directly so the final image exactly
      // overlaps the navigation logo, independent of viewport or scale.
      animation = mark.current.animate(
        [
          {
            left: `${source.left}px`,
            top: `${source.top}px`,
            width: `${source.width}px`,
            height: `${source.height}px`,
            transform: "none",
          },
          {
            left: `${target.left}px`,
            top: `${target.top}px`,
            width: `${target.width}px`,
            height: `${target.height}px`,
            transform: "none",
          },
        ],
        {
          duration: 1200,
          easing: "cubic-bezier(.65, 0, .2, 1)",
          fill: "forwards",
        },
      );
      animation.finished.then(finish).catch(() => {});
      finishTimer = window.setTimeout(finish, 1350);
    }, 1700);
    const skip = (event) => {
      if (event.key === "Escape") finish();
    };
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const motionChange = (event) => {
      if (event.matches) finish();
    };
    document.addEventListener("keydown", skip);
    motion.addEventListener("change", motionChange);
    return () => {
      clearTimeout(beginTimer);
      clearTimeout(finishTimer);
      animation?.cancel();
      document.removeEventListener("keydown", skip);
      motion.removeEventListener("change", motionChange);
    };
  }, [logoRef]);

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden"
      aria-label="Royat Al Najah, 15 plus years and counting"
    >
      <div
        className={`absolute inset-0 bg-[#161519] transition-opacity duration-[1200ms] ease-out ${leaving ? "opacity-0" : "opacity-100"}`}
      >
        <div className="absolute inset-0 bg-[url('/assets/skyline-night.jpg')] bg-cover bg-center opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#291c18]/70 via-[#241a1b]/65 to-[#080c14]/95" />
      </div>
      <img
        ref={mark}
        src="/assets/logo.png"
        alt=""
        style={{ transform: "translate(-50%, -50%)" }}
        className="pointer-events-none fixed top-[45%] left-1/2 z-10 h-auto w-[min(260px,58vw)] object-contain"
      />
      <div
        className={`pointer-events-none absolute top-[calc(45%+110px)] left-1/2 w-[90%] -translate-x-1/2 text-center text-[18px] font-light tracking-[.15em] text-[#fff7e5] transition-all duration-500 max-[500px]:top-[calc(45%+95px)] max-[500px]:text-base ${leaving ? "translate-y-3 opacity-0" : "opacity-100"}`}
      >
        <div className="mx-auto mb-5 h-px w-16 bg-[#d4bb78]" />
        {copy[language].experience}
      </div>
    </div>
  );
}
