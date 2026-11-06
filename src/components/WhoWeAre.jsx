import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const words = {
  en: { eyebrow: "WHO WE ARE", title: "Spaces built around people.", body: "We help businesses in Dubai find the right spaces for their people and their ambitions.", link: "Discover our spaces", note: "FROM VISION TO SPACE" },
  ar: { eyebrow: "من نحن", title: "مساحات تتمحور حول الإنسان.", body: "نساعد الشركات في دبي على إيجاد المساحات المناسبة لأفرادها وطموحاتها.", link: "اكتشف مساحاتنا", note: "من الرؤية إلى الواقع" },
};

function Building({ blueprint = false }) {
  const glass = blueprint ? "url(#blueprintWindows)" : "url(#glassWindows)";
  const wall = blueprint ? "#e8e4d7" : "url(#facade)";
  const edge = blueprint ? "#987a38" : "#766f60";
  return (
    <g stroke={edge} strokeWidth="1.5" strokeLinejoin="round">
      <path d="M64 443 133 403 133 190 64 227Z" fill={blueprint ? "#f1eee5" : "#d2cabc"} />
      <path d="M133 190 273 155 273 403 133 443Z" fill={wall} />
      <path d="M273 155 342 190 342 439 273 403Z" fill={blueprint ? "#e0dacb" : "#aca59a"} />
      <path d="M83 239 119 221 119 404 83 424Z" fill={glass} />
      <path d="M146 203 260 174 260 396 146 428Z" fill={glass} />
      <path d="M282 175 330 200 330 422 282 397Z" fill={glass} />
      <path d="M133 190 273 155 342 190 203 226Z" fill={blueprint ? "#f8f6ef" : "#e9e4d8"} />
      <path d="M147 181 273 149 326 176 203 209Z" fill={blueprint ? "#f8f6ef" : "#c8c0af"} />
      <path d="M145 414 260 383 M145 370 260 339 M145 326 260 295 M145 282 260 251 M145 238 260 207 M282 220 330 245 M282 264 330 289 M282 308 330 333 M282 352 330 377" fill="none" opacity=".65" />
      <path d="M98 443 98 395 119 384 119 431 M205 412 205 366 237 357 237 403" fill={blueprint ? "none" : "#776d5c"} />
      <path d="M43 455 135 449 273 412 364 454 256 480 135 489Z" fill={blueprint ? "none" : "#d1cabd"} />
    </g>
  );
}

export default function WhoWeAre({ language }) {
  const section = useRef(null);
  const t = words[language] || words.en;
  useEffect(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const context = gsap.context(() => {
        gsap.fromTo("[data-blueprint]", { clipPath: "inset(100% 0 0 0)" }, {
          clipPath: "inset(0% 0 0 0)", ease: "none",
          scrollTrigger: { trigger: section.current, start: "top 95%", end: "top 8%", scrub: 0.6 },
        });
        gsap.fromTo("[data-drawing]", { opacity: 0 }, {
          opacity: 1, ease: "none",
          scrollTrigger: { trigger: section.current, start: "top 70%", end: "top 10%", scrub: 0.6 },
        });
      }, section);
      return () => context.revert();
    });
    return () => media.revert();
  }, []);
  return (
    <section ref={section} aria-labelledby="business-intro" className="relative mx-auto grid min-h-[100svh] max-w-[1500px] snap-start items-center gap-10 overflow-hidden px-6 pt-32 pb-16 sm:px-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-16 lg:px-16 lg:py-28">
      <div className="max-w-[570px] text-start">
        <p className="font-[Montserrat,Noto_Sans_Arabic,sans-serif] text-[16px] font-normal tracking-[.18em] text-[#8b6a21]">{t.eyebrow}</p>
        <h2 id="business-intro" className="mt-6 font-[Optima,Noto_Sans_Arabic,Georgia,serif] text-[clamp(42px,5.4vw,78px)] font-normal leading-[1.08] tracking-[-.025em]">{t.title}</h2>
        <div aria-hidden="true" className="mt-8 h-px w-20 bg-[#c39c37]" />
        <p className="mt-8 max-w-[490px] font-[Montserrat,Noto_Sans_Arabic,sans-serif] text-[clamp(18px,1.5vw,21px)] leading-[1.75] text-[#4d4940]">{t.body}</p>
        <a href="#spaces" className="mt-9 inline-flex min-h-[58px] items-center gap-5 rounded-full border border-[#a88b47] px-7 font-[Montserrat,Noto_Sans_Arabic,sans-serif] text-[16px] font-semibold text-[#29251d] no-underline transition-colors hover:bg-[#1b1a17] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8d6e27]">{t.link}<span aria-hidden="true" className="text-xl">↗</span></a>
      </div>
      <div className="relative mx-auto w-full max-w-[720px]" role="img" aria-label={language === "ar" ? "تصميم معماري يتحول إلى مخطط هندسي" : "An architectural illustration transforming into a blueprint"}>
        <div className="relative aspect-[1/1] overflow-hidden rounded-[4px] border border-[#cabd9d]/45 bg-[#eae6dc] shadow-[0_25px_70px_rgba(72,59,33,.12)]">
          <svg viewBox="0 0 420 520" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
            <defs>
              <linearGradient id="facade" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#eee9de"/><stop offset="1" stopColor="#a69f91"/></linearGradient>
              <pattern id="glassWindows" width="18" height="20" patternUnits="userSpaceOnUse"><rect width="18" height="20" fill="#788d91"/><path d="M0 0H18 M0 0V20" stroke="#e7e4d8" strokeWidth="2"/><path d="M3 3 16 3" stroke="#bdd0cb" opacity=".7"/></pattern>
              <pattern id="blueprintWindows" width="18" height="20" patternUnits="userSpaceOnUse"><rect width="18" height="20" fill="#f6f3e9"/><path d="M0 0H18 M0 0V20 M9 0V20" fill="none" stroke="#aa8d4c" strokeWidth=".7"/></pattern>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" fill="none" stroke="#b6a981" strokeWidth=".45" opacity=".5"/></pattern>
            </defs>
            <rect width="420" height="520" fill="#eae6dc" />
            <circle cx="220" cy="260" r="170" fill="#f4f1e9" opacity=".65" />
            <Building />
          </svg>
          <div data-blueprint className="absolute inset-0 overflow-hidden">
            <svg viewBox="0 0 420 520" className="h-full w-full" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
              <rect width="420" height="520" fill="#f7f5ed" /><rect width="420" height="520" fill="url(#grid)" />
              <g data-drawing fill="none" stroke="#b49753" strokeWidth=".7"><path d="M28 458H388 M43 472V110 M355 472V110 M43 125H355 M45 100H370 M75 85V465 M346 85V465" strokeDasharray="4 5"/><path d="M53 150H32 M32 150V442 M26 150H38 M26 442H38 M365 155H385 M385 155V440 M379 155H391 M379 440H391"/></g>
              <Building blueprint />
            </svg>
          </div>
          <span className="absolute bottom-5 left-5 font-[Montserrat,sans-serif] text-[12px] tracking-[.13em] text-[#655638] sm:bottom-7 sm:left-7">{t.note}</span>
        </div>
      </div>
    </section>
  );
}
