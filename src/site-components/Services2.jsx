
export default function Services2() {
  return (
    <section className={"services silk"} id={"services"}>
      <div className={"section-heading"}>
        <p className={"eyebrow"}>
          {"WHAT WE DO"}
        </p>
        <h2>
          {"DIFFERENT SPACES."}
          <br />
          {"ONE CLEAR PURPOSE."}
        </h2>
        <p>
          {"Property solutions shaped around the way your business works."}
        </p>
      </div>
      <div className={"service-grid"}>
        <article>
          <img src={"/assets/workforce-concept.jpg"} alt={"Illustrative workforce accommodation"} loading={"lazy"} />
          <div>
            <span>
              {"01 / WORKFORCE LIVING"}
            </span>
            <h3>
              {"Spaces for your people."}
            </h3>
            <p>
              {"Well-planned accommodation for the people who keep business moving."}
            </p>
            <p className={"service-detail"}>
              {"We help businesses consider location, capacity and practical requirements when looking for accommodation for their teams."}
            </p>
            <a href={"#contact"}>
              {"ENQUIRE "}
              <span>
                {"↗"}
              </span>
            </a>
          </div>
        </article>
        <article>
          <img src={"/assets/burj-al-arab-window.png"} alt={"Illustration of an office overlooking Burj Al Arab"} loading={"lazy"} />
          <div>
            <span>
              {"02 / CORPORATE FACILITIES"}
            </span>
            <h3>
              {"Room to do your best work."}
            </h3>
            <p>
              {"Workspaces shaped for teams, clients and the pace of growth."}
            </p>
            <p className={"service-detail"}>
              {"From office requirements to facilities for daily operations, we help you explore options that fit your business."}
            </p>
            <a href={"#contact"}>
              {"ENQUIRE "}
              <span>
                {"↗"}
              </span>
            </a>
          </div>
        </article>
        <article>
          <img src={"/assets/commercial-concept.jpg"} alt={"Illustrative commercial property"} loading={"lazy"} />
          <div>
            <span>
              {"03 / COMMERCIAL SPACES"}
            </span>
            <h3>
              {"Where business moves forward."}
            </h3>
            <p>
              {"Premises with room for operations, visibility and ambition."}
            </p>
            <p className={"service-detail"}>
              {"Explore commercial spaces for activities such as warehousing, retail and business operations, guided by your priorities."}
            </p>
            <a href={"#contact"}>
              {"ENQUIRE "}
              <span>
                {"↗"}
              </span>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
