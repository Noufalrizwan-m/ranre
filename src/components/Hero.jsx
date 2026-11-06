import { useEffect, useState } from "react";

const shade =
  "linear-gradient(90deg, rgba(12,29,41,.74) 0%, rgba(12,29,41,.53) 26%, rgba(12,29,41,.08) 53%, transparent 67%)";
const day = { backgroundImage: `${shade}, url('/assets/skyline-day.jpg')` };
const night = { backgroundImage: `${shade}, url('/assets/skyline-night.jpg')` };
const mask = {
  mask: "url('/assets/tower-mask.svg') center / cover no-repeat",
  WebkitMask: "url('/assets/tower-mask.svg') center / cover no-repeat",
};

function SkylineLayer({ dark, tower = false }) {
  return (
    <div
      aria-hidden="true"
      style={tower ? mask : undefined}
      className={`pointer-events-none absolute inset-0 ${tower ? "z-20" : "z-0"}`}
    >
      <div
        style={day}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      />
      <div
        style={night}
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500 motion-reduce:transition-none ${dark ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}

export default function Hero({ language }) {
  const [dark, setDark] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const greetings = ["HALA", "WELCOME"];
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return undefined;
    const cycle = window.setInterval(
      () => setWordIndex((current) => (current + 1) % greetings.length),
      3000,
    );
    return () => window.clearInterval(cycle);
  }, []);
  return (
    <section
      id="hero"
      aria-label="Royat Al Najah Real Estate in Dubai"
      className="relative isolate h-[100svh] min-h-[100svh] snap-start overflow-hidden bg-[#64839b] text-white"
    >
      <SkylineLayer dark={dark} />
      <h1 aria-live="polite" className="pointer-events-none absolute top-[43%] left-1/2 z-10 m-0 w-[92%] -translate-x-1/2 text-center font-[Optima,Palatino_Linotype,Georgia,serif] text-[clamp(58px,8.5vw,142px)] font-normal leading-[.88] tracking-[-.065em] bg-gradient-to-b from-[#fff1b9] via-[#d0aa4c] to-[#9b7423] bg-clip-text text-transparent [text-shadow:0_2px_0_#76581b,0_4px_0_#604714,0_12px_26px_rgba(0,0,0,.55)] max-[760px]:top-[43%] max-[760px]:text-[clamp(48px,13vw,74px)]">
        {greetings[wordIndex]}
      </h1>
      <p className="pointer-events-none absolute bottom-9 left-[max(24px,5vw)] z-[25] m-0 border-l border-[#d0aa4c] pl-3 font-[Poppins,Arial,sans-serif] text-[10px] font-normal tracking-[.16em] text-white/90 uppercase max-[760px]:bottom-7 max-[760px]:left-6 max-[760px]:text-[8px]">Dubai real estate for people and business.</p>
      <SkylineLayer dark={dark} tower />
      <button
        type="button"
        role="switch"
        aria-label="Daylight mode"
        aria-checked={!dark}
        aria-describedby="light-help"
        onClick={() => setDark((current) => !current)}
        className="absolute top-1/2 right-[max(3%,24px)] z-30 flex h-28 w-[62px] -translate-y-1/2 cursor-pointer flex-col items-center justify-between rounded-full border border-white/65 bg-[#1d2937]/40 p-[6px] shadow-lg backdrop-blur-2xl focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-white max-[760px]:right-4 max-[760px]:h-[100px] max-[760px]:w-[54px] max-[760px]:p-[5px]"
      >
        <span
          aria-hidden="true"
          className={`absolute top-[6px] left-[6px] h-12 w-12 rounded-full bg-[#fff9e9] shadow-lg transition-transform duration-300 max-[760px]:top-[5px] max-[760px]:left-[5px] max-[760px]:h-[42px] max-[760px]:w-[42px] motion-reduce:transition-none ${dark ? "translate-y-[50px] max-[760px]:translate-y-[46px]" : ""}`}
        />
        <span
          aria-hidden="true"
          className={`relative grid h-12 w-12 place-items-center text-[27px] leading-none max-[760px]:h-[42px] max-[760px]:w-[42px] max-[760px]:text-2xl ${dark ? "text-white" : "text-[#ad883c]"}`}
        >
          ☀
        </span>
        <span
          aria-hidden="true"
          className={`relative grid h-12 w-12 place-items-center text-[27px] leading-none max-[760px]:h-[42px] max-[760px]:w-[42px] max-[760px]:text-2xl ${dark ? "text-[#344a73]" : "text-white"}`}
        >
          ☾
        </span>
      </button>
      <span id="light-help" className="sr-only">
        Switch between day and night views of the Dubai skyline.
      </span>
    </section>
  );
}
