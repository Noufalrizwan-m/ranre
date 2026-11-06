
export default function Opening2() {
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
          {"ABOUT ROYAT AL NAJAH"}
        </p>
        <h2>
          {"BUILT ON EXPERIENCE."}
          <br />
          {"FOCUSED ON PEOPLE."}
        </h2>
        <p>
          {"For more than 15 years, we have helped businesses in the UAE find spaces that support their people, operations and ambitions."}
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
