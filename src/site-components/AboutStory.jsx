
export default function AboutStory() {
  return (
    <section className={"about-story"} aria-labelledby={"our-story-heading"}>
      <div className={"about-story-image"}>
        <img src={"/assets/burj-al-arab-window.png"} alt={"Illustration of an office overlooking Burj Al Arab"} loading={"lazy"} />
      </div>
      <div className={"about-story-content"}>
        <p className={"eyebrow"}>
          {"OUR STORY"}
        </p>
        <h2 id={"our-story-heading"}>
          {"REAL ESTATE IS"}
          <br />
          {"ABOUT PEOPLE."}
        </h2>
        <p>
          {"Every business has its own priorities. We start by listening, then help identify spaces that suit its people, operational needs and plans for growth."}
        </p>
        <p>
          {"From workforce accommodation to offices and commercial premises, our focus is on practical guidance and relationships built on trust."}
        </p>
        <a href={"/services/"} className={"outline-button"}>
          {"EXPLORE OUR SERVICES "}
          <span>
            {"↗"}
          </span>
        </a>
      </div>
    </section>
  );
}
