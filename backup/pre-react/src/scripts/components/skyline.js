export function initializeSkyline() {
  const hero = document.querySelector(".hero");
  const toggle = hero?.querySelector(".light-control__switch");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    const isNight = hero.dataset.mode !== "night";
    hero.dataset.mode = isNight ? "night" : "day";
    toggle.setAttribute("aria-checked", String(!isNight));
    toggle.setAttribute(
      "aria-label",
      isNight ? "Daylight mode, off" : "Daylight mode, on",
    );
  });
}
