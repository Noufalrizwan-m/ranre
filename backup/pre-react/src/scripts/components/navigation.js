export function initializeNavigation() {
  const header = document.querySelector(".header");
  const toggle = document.querySelector(".menu");
  const navigation = document.querySelector("#navigation");

  if (!header || !toggle || !navigation) return;

  function setMenuOpen(isOpen) {
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation",
    );
    navigation.classList.toggle("open", isOpen);
  }

  toggle.addEventListener("click", () => {
    setMenuOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      toggle.getAttribute("aria-expanded") === "true"
    ) {
      setMenuOpen(false);
      toggle.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (!header.contains(event.target)) setMenuOpen(false);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenuOpen(false);
  });

  window
    .matchMedia("(min-width: 761px)")
    .addEventListener("change", () => setMenuOpen(false));

  function updateHeader() {
    header.classList.toggle("scrolled", window.scrollY > 30);
  }
  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();
}
