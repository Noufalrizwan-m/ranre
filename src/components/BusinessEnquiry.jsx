import { useEffect, useRef, useState } from "react";
import { copy } from "../data/translations.js";
import SpaceStory from "./SpaceStory.jsx";
import WhoWeAre from "./WhoWeAre.jsx";

const empty = {
  name: "",
  email: "",
  phone: "",
  company: "",
  requirement: "",
  message: "",
};
const optionValues = [
  "Workforce accommodation",
  "Corporate facilities",
  "Commercial property",
  "Property management",
  "Other",
];
const field =
  "w-full rounded-none border-0 border-b border-[#b3a991] bg-transparent py-4 text-[17px] text-[#1d1c18] outline-none transition-colors placeholder:text-[#6b675f] focus:border-[#a47b22] focus:ring-0";
const label =
  "block font-[Montserrat,Noto_Sans_Arabic,sans-serif] text-[16px] font-normal text-[#24231f]";
const button =
  "inline-flex min-h-[60px] items-center justify-center gap-5 rounded-full bg-[#1b1a17] px-9 font-[Montserrat,Noto_Sans_Arabic,sans-serif] text-[17px] font-semibold text-white no-underline shadow-[0_12px_32px_rgba(31,25,12,.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#8d6e27] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8d6e27]";

function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`${className} transition-[opacity,transform] duration-700 ease-out motion-reduce:transform-none motion-reduce:opacity-100 ${visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
    >
      {children}
    </div>
  );
}

export default function BusinessEnquiry({ language }) {
  const t = copy[language];
  const [form, setForm] = useState(empty);
  const [draft, setDraft] = useState(null);
  const [copied, setCopied] = useState(false);
  const update = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
    setDraft(null);
    setCopied(false);
  };
  const prepare = (event) => {
    event.preventDefault();
    const body = `Hello Royat Al Najah team,\n\nI would like to enquire about ${form.requirement.toLowerCase()}.\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCompany: ${form.company || "Not provided"}\n\nRequirements:\n${form.message}\n\nThank you.`;
    setDraft({
      body,
      href: `mailto:info@ranre.ae?subject=${encodeURIComponent("Property enquiry — " + form.requirement)}&body=${encodeURIComponent(body)}`,
    });
  };
  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(draft.body);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };
  return (
    <section
      lang={language}
      dir={language === "ar" ? "rtl" : "ltr"}
      className="relative isolate overflow-hidden bg-[#f8f7f2] text-[#1b1a17]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-[6%] -z-20 bg-[url('/assets/marble-reference.png')] bg-cover bg-center opacity-100"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,255,253,.52),rgba(250,249,244,.64)_55%,rgba(255,255,253,.75))]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[20%] -right-[15%] -z-10 h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle,rgba(195,156,55,.16),transparent_65%)] blur-3xl"
      />
      <WhoWeAre language={language} />
      <SpaceStory language={language} />
      <section
        id="enquiry"
        aria-labelledby="enquiry-title"
        className="snap-start scroll-mt-28 border-t border-[#c39c37]/30 px-6 pt-24 pb-32 sm:px-10 lg:pt-32 lg:pb-40"
      >
        <Reveal className="mx-auto max-w-[960px]">
          <div className="text-center">
            <p className="font-[Montserrat,Noto_Sans_Arabic,sans-serif] text-[16px] font-extralight tracking-[.18em] text-[#8b6a21]">
              {t.enquiryEyebrow}
            </p>
            <h2
              id="enquiry-title"
              className="mt-6 font-[Optima,Noto_Sans_Arabic,Georgia,serif] text-[clamp(37px,4vw,58px)] font-normal leading-[1.15] tracking-[-.025em] text-[#1b1a17]"
            >
              {t.formTitle}
            </h2>
            <p className="mx-auto mt-6 max-w-[650px] font-[Montserrat,Noto_Sans_Arabic,sans-serif] text-[19px] font-normal leading-relaxed text-[#514b3e]">
              {t.formIntro}
            </p>
          </div>
          <form
            onSubmit={prepare}
            className="mt-16 grid grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-2"
          >
            <label className={label}>
              {t.name}
              <input
                className={field}
                name="name"
                value={form.name}
                onChange={update}
                autoComplete="name"
                required
              />
            </label>
            <label className={label}>
              {t.company}
              <input
                className={field}
                name="company"
                value={form.company}
                onChange={update}
                autoComplete="organization"
              />
            </label>
            <label className={label}>
              {t.email}
              <input
                className={field}
                type="email"
                name="email"
                value={form.email}
                onChange={update}
                autoComplete="email"
                required
              />
            </label>
            <label className={label}>
              {t.phone}
              <input
                className={field}
                type="tel"
                name="phone"
                value={form.phone}
                onChange={update}
                autoComplete="tel"
                required
              />
            </label>
            <label className={`${label} sm:col-span-2`}>
              {t.kind}
              <select
                className={`${field} cursor-pointer [&>option]:bg-[#faf9f4]`}
                name="requirement"
                value={form.requirement}
                onChange={update}
                required
              >
                <option value="" disabled>
                  {t.select}
                </option>
                {optionValues.map((value, index) => (
                  <option key={value} value={value}>
                    {t.options[index]}
                  </option>
                ))}
              </select>
            </label>
            <label className={`${label} sm:col-span-2`}>
              {t.requirements}
              <textarea
                className={`${field} min-h-28 resize-y`}
                name="message"
                value={form.message}
                onChange={update}
                placeholder={t.placeholder}
                required
              />
            </label>
            <div className="text-center sm:col-span-2">
              <button type="submit" className={`${button} cursor-pointer`}>
                {t.prepare}
                <span aria-hidden="true" className="text-2xl font-normal">
                  ↗
                </span>
              </button>
              <p className="mt-5 font-[Montserrat,Noto_Sans_Arabic,sans-serif] text-[16px] font-normal leading-relaxed text-[#514b3e]">
                {t.hint}
              </p>
            </div>
          </form>
          {draft && (
            <div
              role="status"
              className="mt-10 rounded-[24px] border border-[#c39c37]/40 bg-white/80 p-6 text-start shadow-lg backdrop-blur-lg sm:p-8"
            >
              <h3 className="font-[Optima,Noto_Sans_Arabic,serif] text-[24px] text-[#1b1a17]">
                {t.ready}
              </h3>
              <p className="mt-3 text-[16px] leading-relaxed text-[#514b3e]">
                {t.review}
              </p>
              <pre
                dir="auto"
                className="mt-5 whitespace-pre-wrap break-words font-[Montserrat,Noto_Sans_Arabic,sans-serif] text-[16px] leading-relaxed text-[#1b1a17]"
              >
                {draft.body}
              </pre>
              <div className="mt-6 flex flex-wrap gap-4">
                <a href={draft.href} className={button}>
                  {t.openEmail}
                </a>
                <button
                  type="button"
                  onClick={copyText}
                  className="min-h-12 cursor-pointer rounded-full border border-[#987223] px-6 text-[16px] text-[#423512]"
                >
                  {copied ? t.copied : t.copy}
                </button>
              </div>
            </div>
          )}
        </Reveal>
      </section>
    </section>
  );
}
