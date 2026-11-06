
export default function FeatureBanner() {
  return (
    <section className={"feature-banner"}>
      <img src={"/assets/dubai-courtyard.png"} alt={"Illustrative Dubai commercial courtyard"} loading={"lazy"} />
      <div className={"banner-copy"}>
        <p className={"eyebrow"}>
          {"PROPERTY WITH PURPOSE"}
        </p>
        <h2>
          {"SPACES MADE FOR"}
          <br />
          {"WHAT COMES NEXT"}
        </h2>
        <p>
          {"We connect businesses with places for their people, operations and next chapter."}
        </p>
      </div>
    </section>
  );
}
