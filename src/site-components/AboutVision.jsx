
export default function AboutVision() {
  return (
    <section className={"about-vision silk"} aria-labelledby={"about-purpose"}>
      <div className={"about-vision-inner"}>
        <div className={"section-heading"}>
          <p className={"eyebrow"}>
            {"WHAT GUIDES US"}
          </p>
          <h2 id={"about-purpose"}>
            {"A CLEAR PURPOSE."}
            <br />
            {"A SHARED DIRECTION."}
          </h2>
          <p>
            {"We believe the right space can support people, strengthen businesses and make room for the future."}
          </p>
        </div>
        <div className={"about-purpose-grid"}>
          <article className={"about-purpose-card"}>
            <span className={"about-number"}>
              {"01"}
            </span>
            <p className={"eyebrow"}>
              {"OUR VISION"}
            </p>
            <h3>
              {"A trusted partner for the spaces that matter."}
            </h3>
            <p>
              {"To be a trusted real estate partner in the UAE, connecting people and businesses with spaces where they can thrive."}
            </p>
          </article>
          <article className={"about-purpose-card"}>
            <span className={"about-number"}>
              {"02"}
            </span>
            <p className={"eyebrow"}>
              {"OUR MISSION"}
            </p>
            <h3>
              {"Make the right space easier to find."}
            </h3>
            <p>
              {"To understand each client's needs and provide considered property solutions with clear guidance and personal service."}
            </p>
          </article>
        </div>
        <div className={"about-values"}>
          <p className={"eyebrow"}>
            {"OUR VALUES"}
          </p>
          <h3>
            {"THE WAY WE WORK"}
          </h3>
          <div className={"about-values-grid"}>
            <article>
              <span>
                {"01"}
              </span>
              <h4>
                {"Integrity"}
              </h4>
              <p>
                {"We aim to build trust through honest communication and transparent advice."}
              </p>
            </article>
            <article>
              <span>
                {"02"}
              </span>
              <h4>
                {"People first"}
              </h4>
              <p>
                {"We listen carefully and keep the people using each space at the centre of our thinking."}
              </p>
            </article>
            <article>
              <span>
                {"03"}
              </span>
              <h4>
                {"Commitment"}
              </h4>
              <p>
                {"We bring care and attention to every conversation and every next step."}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
