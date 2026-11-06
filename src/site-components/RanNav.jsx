
export default function RanNav() {
  const page = document.body.dataset.page || "home";
  return (
    <header className={"ran-nav"}>
      <a className={"ran-nav-logo"} href={"/"} aria-label={"Royat Al Najah home"}>
        <img src={"/assets/royat-logo.png"} alt={"Royat Al Najah Real Estate"} />
      </a>
      <nav id={"ran-menu"} className={"ran-nav-links"} aria-label={"Main navigation"}>
        <a href={"/"} aria-current={page === "home" ? "page" : undefined}>
          {"Home"}
        </a>
        <a href={"/about/"} aria-current={page === "about" ? "page" : undefined}>
          {"About us"}
        </a>
        <a href={"/services/"} aria-current={page === "services" ? "page" : undefined}>
          {"Services"}
        </a>
        <a href={"/approach/"} aria-current={page === "approach" ? "page" : undefined}>
          {"Our approach"}
        </a>
      </nav>
      <button type={"button"} className={"language-toggle"} aria-label={"Switch to Arabic"} lang={"ar"}>
        {"العربية"}
      </button>
      <a className={"ran-nav-contact"} href={"#contact"}>
        {"CONTACT US "}
        <span aria-hidden={"true"}>
          {"↗"}
        </span>
      </a>
      <button type={"button"} className={"ran-nav-menu"} aria-label={"Open menu"} aria-expanded={"false"} aria-controls={"ran-menu"}>
        {"☰"}
      </button>
    </header>
  );
}
