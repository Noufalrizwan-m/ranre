
export default function ServicesPageHero() {
  return (
    <section className={"services-page-hero"} aria-labelledby={"services-page-title"}>
      <img src={"/assets/space-restructuring.png"} alt={"Illustration of professionals working on a building renovation"} fetchpriority={"high"} />
      <div className={"services-page-hero-copy"}>
        <p className={"eyebrow"}>
          {"OUR SERVICES"}
        </p>
        <h1 id={"services-page-title"}>
          {"SPACES THAT WORK"}
          <br />
          {"FOR YOUR BUSINESS."}
        </h1>
        <p>
          {"From accommodation for your workforce to offices and commercial premises, we help you find a space that fits the way you work."}
        </p>
        <a className={"outline-button"} href={"#services"}>
          {"EXPLORE OUR SERVICES "}
          <span>
            {"↓"}
          </span>
        </a>
      </div>
    </section>
  );
}
