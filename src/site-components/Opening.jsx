
export default function Opening() {
  return (
    <div className={"opening silk"}>
      <div className={"sparkles"} aria-hidden={"true"}>
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className={"hero-wrap"}>
        <div className={"skyline-scene"} aria-label={"Dubai skyline, day and night"}>
          <div className={"skyline-layer skyline-day"} />
          <div className={"skyline-layer skyline-night"} />
          <h1 className={"skyline-greeting"} aria-live={"off"}>
            {"HALA"}
          </h1>
          <div className={"skyline-tower"}>
            <div className={"skyline-layer skyline-day"} />
            <div className={"skyline-layer skyline-night"} />
          </div>
          <p className={"skyline-caption"}>
            {"DUBAI REAL ESTATE FOR PEOPLE AND BUSINESS."}
          </p>
          <button className={"skyline-toggle"} type={"button"} role={"switch"} aria-label={"Daylight mode"} aria-checked={"true"}>
            <span>
              {"☀"}
            </span>
            <span>
              {"☾"}
            </span>
          </button>
        </div>
      </div>
      <section className={"intro-copy"} id={"about"}>
        <p className={"eyebrow"}>
          {"WELCOME TO ROYAT AL NAJAH"}
        </p>
        <h2>
          {"THE RIGHT SPACE FOR"}
          <br />
          {"YOUR NEXT CHAPTER"}
        </h2>
        <p>
          {"From workforce accommodation to offices and commercial properties, Royat Al Najah helps businesses find spaces that support their people and their ambitions."}
        </p>
        <a className={"outline-button"} href={"/about/"}>
          {"LEARN MORE "}
          <span>
            {"↗"}
          </span>
        </a>
      </section>
    </div>
  );
}
