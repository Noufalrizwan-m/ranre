export function initializeHeroMessages() {
  const title = document.querySelector(".hero-copy__years");
  const subtitle = document.querySelector(".hero-copy__headline");
  if (!title || !subtitle) return;
  const messages = ["15 YEARS", "WORKFORCE LIVING", "COMMERCIAL SPACES"];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let index = 0;
  let timer;
  let transitionTimer;
  function start() {
    clearInterval(timer);
    clearTimeout(transitionTimer);
    title.classList.remove("is-changing");
    if (reducedMotion.matches) return;
    timer = setInterval(() => {
      if (document.hidden) return;
      title.classList.add("is-changing");
      subtitle.classList.add("is-changing");
      transitionTimer = setTimeout(() => {
        index = (index + 1) % messages.length;
        title.textContent = messages[index];
        subtitle.hidden = index !== 0;
        title.classList.toggle("is-long", index !== 0);
        title.classList.remove("is-changing");
        subtitle.classList.remove("is-changing");
      }, 300);
    }, 6000);
  }
  reducedMotion.addEventListener("change", start);
  start();
}
