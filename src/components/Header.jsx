import { useEffect, useRef, useState } from "react";
import { navigation } from "../data/site.js";
import { copy } from "../data/translations.js";

export default function Header({
  logoRef,
  introActive,
  language,
  setLanguage,
}) {
  const t = copy[language];
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const header = useRef(null);
  const menu = useRef(null);
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 30);
    const outside = (e) => {
      if (header.current && !header.current.contains(e.target)) setOpen(false);
    };
    const escape = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        menu.current?.focus();
      }
    };
    const media = window.matchMedia("(min-width: 761px)");
    const resize = () => setOpen(false);
    window.addEventListener("scroll", scroll, { passive: true });
    document.addEventListener("click", outside);
    document.addEventListener("keydown", escape);
    media.addEventListener("change", resize);
    scroll();
    return () => {
      window.removeEventListener("scroll", scroll);
      document.removeEventListener("click", outside);
      document.removeEventListener("keydown", escape);
      media.removeEventListener("change", resize);
    };
  }, []);
  return (
    <header
      ref={header}
      aria-label="Main header"
      className={`fixed left-1/2 z-30 flex font-[Poppins,Noto_Sans_Arabic,sans-serif] w-[90%] max-w-[1080px] -translate-x-1/2 items-center gap-2 rounded-full border border-white/80 bg-white/40 py-2 pr-2 pl-4 shadow-[inset_0_2px_3px_#ffffff88,0_16px_45px_#48433315] backdrop-blur-2xl transition-all duration-300 min-[761px]:w-[76%] min-[761px]:gap-4 min-[761px]:pr-[10px] min-[761px]:pl-6 min-[761px]:max-[1000px]:w-[90%] min-[761px]:max-[1000px]:gap-5 ${scrolled ? "top-[14px] h-[70px] bg-white/70" : "top-[18px] h-[88px] min-[761px]:top-6 min-[761px]:h-[78px]"}`}
    >
      <a
        href="/"
        aria-label="Royat Al Najah Real Estate — Home"
        className="mr-auto shrink-0 max-[760px]:w-[68px]"
      >
        <img
          ref={logoRef}
          src="/assets/logo.png"
          alt="Royat Al Najah Real Estate LLC"
          className={`h-[62px] w-[87px] object-contain min-[761px]:w-[88px] ${introActive ? "opacity-0" : "opacity-100"}`}
        />
      </a>
      <nav
        id="navigation"
        aria-label="Main navigation"
        lang={language}
        dir={language === "ar" ? "rtl" : "ltr"}
        className={`${open ? "flex" : "hidden"} absolute top-[100px] right-0 left-0 flex-col gap-1 rounded-[28px] border border-white bg-[#f5f6ef] p-6 shadow-xl min-[761px]:static min-[761px]:flex min-[761px]:flex-row min-[761px]:items-center min-[761px]:gap-5 min-[761px]:rounded-none min-[761px]:border-0 min-[761px]:bg-transparent min-[761px]:p-0 min-[761px]:shadow-none min-[761px]:max-[1000px]:gap-5`}
      >
        {navigation.map((item, index) => (
          <a
            key={item.label}
            href={item.href}
            aria-current={item.active ? "page" : undefined}
            onClick={() => setOpen(false)}
            className={`relative py-3 text-[17px] text-[#45483f] no-underline after:absolute after:right-0 after:bottom-1 after:left-0 after:h-[2px] after:origin-left after:bg-[#a38532] after:transition-transform hover:after:scale-x-100 min-[761px]:text-base ${item.active ? "after:scale-x-100" : "after:scale-x-0"}`}
          >
            {t.nav[index]}
          </a>
        ))}
      </nav>
      <button
        type="button"
        onClick={() => setLanguage(language === "en" ? "ar" : "en")}
        lang={language === "en" ? "ar" : "en"}
        aria-label={
          language === "en" ? "Switch to Arabic" : "Switch to English"
        }
        className="shrink-0 cursor-pointer rounded-full px-2 py-2 font-[Poppins,'Noto_Sans_Arabic',sans-serif] text-[15px] font-normal text-[#292929] hover:text-[#987223] focus-visible:outline-2 focus-visible:outline-[#987223]"
      >
        {language === "en" ? "العربية" : "EN"}
      </button>
      <a
        href="#contact"
        className="flex min-h-[50px] shrink-0 items-center gap-[13px] rounded-full border border-[#d9c17c] bg-gradient-to-br from-[#b69745] to-[#8b702e] px-[17px] text-sm font-semibold text-white no-underline shadow-sm transition-transform hover:-translate-y-0.5 min-[761px]:min-h-[54px] min-[761px]:gap-[22px] min-[761px]:px-6 min-[761px]:text-base"
      >
        {t.enquire}{" "}
        <span
          aria-hidden="true"
          className="text-xl font-normal min-[761px]:text-2xl"
        >
          ↗
        </span>
      </a>
      <button
        ref={menu}
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="navigation"
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-[5px] rounded-full border border-white/50 bg-white/30 min-[761px]:hidden"
      >
        <span
          className={`h-[1.5px] w-4 bg-[#45483f] transition-transform ${open ? "translate-y-[3.25px] rotate-45" : ""}`}
        />
        <span
          className={`h-[1.5px] w-4 bg-[#45483f] transition-transform ${open ? "-translate-y-[3.25px] -rotate-45" : ""}`}
        />
      </button>
    </header>
  );
}
