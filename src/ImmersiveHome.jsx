import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from './components/SplitText';

gsap.registerPlugin(ScrollTrigger);

const spaces = [
  { number: '01', title: 'Workforce living', copy: 'Well-planned accommodation for the people who keep business moving.', image: '/assets/workforce-concept.jpg' },
  { number: '02', title: 'Corporate facilities', copy: 'Workspaces shaped for teams, clients and the pace of growth.', image: '/assets/business-district.jpg' },
  { number: '03', title: 'Commercial spaces', copy: 'Premises with room for operations, visibility and ambition.', image: '/assets/commercial-concept.jpg' },
];

function Brand() {
  return <a className="cine-brand" href="#top" aria-label="Royat Al Najah home"><img src="/assets/logo.png" alt="Royat Al Najah Real Estate" /></a>;
}

export default function ImmersiveHome({ includeHero = true }) {
  const root = useRef(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        gsap.utils.toArray('[data-fade]').forEach((node) => {
          gsap.fromTo(node, { y: 48, opacity: 0 }, { y: 0, opacity: 1, duration: .9, ease: 'power3.out', scrollTrigger: { trigger: node, start: 'top 86%', once: true } });
        });
        const assemble = gsap.timeline({ scrollTrigger: { trigger: '#renovation', start: 'top top', end: '+=150%', scrub: 1, pin: '.renovation-stage', anticipatePin: 1 } });
        assemble
          .fromTo('[data-exploded]', { scale: .78, rotateX: 11, rotateZ: -2, y: 86 }, { scale: 1.04, rotateX: 0, rotateZ: 0, y: 0, ease: 'none' }, 0)
          .to('[data-slab="top"]', { yPercent: 68, xPercent: -10, rotate: -2, ease: 'none' }, 0)
          .to('[data-slab="mid"]', { yPercent: 32, xPercent: 8, rotate: 1.5, ease: 'none' }, 0)
          .to('[data-slab="base"]', { yPercent: -18, xPercent: -5, rotate: -1, ease: 'none' }, 0)
          .fromTo('[data-reno-copy]', { y: 42, opacity: 0 }, { y: 0, opacity: 1, ease: 'none' }, .38);
        const cards = gsap.utils.toArray('[data-space-card]');
        cards.forEach((card, i) => {
          gsap.fromTo(card, { y: 140 + i * 46, rotate: i === 1 ? -4 : i === 2 ? 5 : -2, scale: .92 }, { y: 0, rotate: 0, scale: 1, ease: 'none', scrollTrigger: { trigger: '#spaces', start: 'top 80%', end: 'bottom 45%', scrub: 1 } });
        });
        gsap.to('[data-courtyard]', { scale: 1.14, yPercent: 8, ease: 'none', scrollTrigger: { trigger: '#courtyard', start: 'top bottom', end: 'bottom top', scrub: 1 } });
      }, root);
      return () => ctx.revert();
    });
    return () => media.revert();
  }, []);
  return <div className="cinema" ref={root} id="top">
    {includeHero && <header className="cine-header">
      <Brand />
      <nav className="cine-nav" aria-label="Primary navigation">
        <a href="#about">Who we are</a><a href="#spaces">Spaces</a><a href="#experience">Experience</a>
      </nav>
      <a className="gold-link" href="#contact">Enquire <span aria-hidden="true">↗</span></a>
      <button className="cine-menu" aria-expanded={open} onClick={() => setOpen(!open)} aria-label="Open menu">{open ? '×' : '☰'}</button>
      {open && <nav className="cine-mobile"><a href="#about" onClick={() => setOpen(false)}>Who we are</a><a href="#spaces" onClick={() => setOpen(false)}>Spaces</a><a href="#experience" onClick={() => setOpen(false)}>Experience</a><a href="#contact" onClick={() => setOpen(false)}>Enquire</a></nav>}
    </header>}

    <main>
      {includeHero && <section className="cine-hero" aria-labelledby="hero-heading">
        <div className="hero-image"/><div className="hero-dusk"/>
        <div className="hero-ornament" aria-hidden="true"/>
        <div className="hero-content" data-fade>
          <p className="overline">DUBAI · UNITED ARAB EMIRATES</p>
          <SplitText tag="h1" className="hero-split" text="Space, made to move business." splitType="words,chars" effect="blur" delay={22} duration={.8} textAlign="left" />
          <a href="#about" className="round-cta">Discover RANRE <span aria-hidden="true">↗</span></a>
        </div>
        <p className="hero-side">EST. DUBAI · PROPERTY WITH PURPOSE</p>
        <div className="hero-scroll">SCROLL TO EXPLORE <span/></div>
      </section>}

      <section id="about" className="who-section">
        <div className="who-copy" data-fade>
          <p className="overline dark">WHO WE ARE</p>
          <SplitText tag="h2" className="who-split" text="Every business deserves the right address." splitType="words" effect="rise" delay={75} duration={.85} textAlign="left" />
          <p className="large-copy">RANRE connects Dubai businesses with places for their people, operations and next chapter.</p>
          <div className="who-rule"/><p className="arabic-mark" lang="ar">مساحات تُصنع للطموح</p>
        </div>
        <div className="who-stat" data-fade><strong>15<span>+</span></strong><span>YEARS OF<br/>EXPERIENCE</span></div>
      </section>

      <section id="renovation" className="renovation">
        <div className="renovation-stage">
          <div className="reno-grid" aria-hidden="true"/>
          <div className="reno-image" data-exploded><img src="/assets/exploded-commercial.png" alt="Illustrative exploded view of a commercial workspace renovation"/>
            <i data-slab="top"/><i data-slab="mid"/><i data-slab="base"/>
          </div>
          <div className="reno-copy" data-reno-copy><p className="overline">FROM EMPTY SHELL TO POSSIBILITY</p><h2>See space<br/><em>before it exists.</em></h2><p>We see more than square metres. We see the layers of a business coming together.</p></div>
          <p className="illustrative">ILLUSTRATIVE VISUAL</p>
        </div>
      </section>

      <section id="spaces" className="spaces-section">
        <div className="space-heading" data-fade><p className="overline dark">WHAT WE CREATE</p><h2>Different spaces.<br/><em>One clear purpose.</em></h2></div>
        <div className="space-stack">
          {spaces.map((space) => <article className="space-card" data-space-card key={space.number}>
            <img src={space.image} alt=""/><div className="card-shade"/><span className="card-number">{space.number}</span><div className="card-copy"><h3>{space.title}</h3><p>{space.copy}</p><a href="#contact">Enquire <span aria-hidden="true">↗</span></a></div>
          </article>)}
        </div>
      </section>

      <section id="courtyard" className="courtyard-section">
        <div className="courtyard-image" data-courtyard><img src="/assets/dubai-courtyard.png" alt="Illustrative Dubai commercial courtyard"/></div>
        <div className="courtyard-overlay" data-fade><p className="overline">DESIGNED WITH DUBAI IN MIND</p><h2>Global ambition.<br/><em>Local understanding.</em></h2></div>
      </section>

      <section id="experience" className="experience-section">
        <p className="overline">THE RANRE WAY</p><h2 data-fade>Clear thinking.<br/><em>Considered places.</em></h2>
        <div className="experience-grid" data-fade>
          <article><span>01</span><h3>Understand</h3><p>Your people, priorities and practical needs come first.</p></article>
          <article><span>02</span><h3>Shape</h3><p>We match the requirement to the right type of space.</p></article>
          <article><span>03</span><h3>Move</h3><p>With a clear route from first conversation to next step.</p></article>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div><p className="overline">START WITH A CONVERSATION</p><h2>Make room for<br/><em>what comes next.</em></h2></div>
        <a className="contact-button" href="mailto:info@ranre.ae">Talk to our team <span aria-hidden="true">↗</span></a>
        <div className="contact-meta"><span>Dubai, United Arab Emirates</span><a href="mailto:info@ranre.ae">info@ranre.ae</a><span>+971 4 422 7600</span></div>
      </section>
    </main>
  </div>;
}
