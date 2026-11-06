import ImmersiveHome from './ImmersiveHome';
import './immersive.css';
import SmoothScroll from './SmoothScroll';
import { useRef, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Intro from './components/Intro.jsx';
/*
import { useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  ArrowUp,
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  Building2,
  House,
  Warehouse,
  Plus,
  Minus,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/Hero';
import EnquiryForm from './components/EnquiryForm';
import { company, services, faqs } from './data/site';
import './index.css';
gsap.registerPlugin(ScrollTrigger);
function Logo() {
  return (
    <a className="brand" href="#home" aria-label="Royat Al Najah home">
      <svg viewBox="0 0 42 46" aria-hidden="true">
        <path d="M3 40V20l8-5v25m6 0V5l8-4v39m6 0V14l8 5v21M0 44h42" />
      </svg>
      <span>
        ROYAT AL NAJAH<small>REAL ESTATE · DUBAI</small>
      </span>
    </a>
  );
}
function PreviousApp() {
  const [menu, setMenu] = useState(false),
    [selected, setSelected] = useState(null),
    [service, setService] = useState('Workforce accommodation');
  const dialog = useRef(null),
    root = useRef(null);
  const icon = { home: House, building: Building2, warehouse: Warehouse };
  useEffect(() => {
    if (!selected) return;
    dialog.current?.showModal();
  }, [selected]);
  useEffect(() => {
    const close = (e) => {
      if (e.key === 'Escape') setMenu(false);
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        gsap.utils
          .toArray('[data-reveal]')
          .forEach((el) =>
            gsap.from(el, {
              y: 30,
              opacity: 0,
              duration: 0.7,
              ease: 'power2.out',
              scrollTrigger: { trigger: el, start: 'top 92%', once: true },
            }),
          );
      }, root);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);
  function enquire(title) {
    setService(title);
    dialog.current?.close();
    setSelected(null);
  }
  return (
    <div ref={root}>
      <a className="skip-link" href="#services">
        Skip to services
      </a>
      <header className="header">
        <Logo />
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#about">About us</a>
          <a href="#services">Our expertise</a>
          <a href="#approach">Our approach</a>
          <a href="#faq">FAQs</a>
        </nav>
        <a className="header-cta" href="#contact">
          Let’s find your space <ArrowUpRight size={16} />
        </a>
        <button
          className="menu-toggle"
          aria-label={menu ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menu}
          aria-controls="mobile-nav"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </button>
        {menu && (
          <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">
            {[
              ['About us', 'about'],
              ['Our expertise', 'services'],
              ['Our approach', 'approach'],
              ['FAQs', 'faq'],
              ['Contact', 'contact'],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>
                {label}
                <ArrowUpRight size={17} />
              </a>
            ))}
          </nav>
        )}
      </header>
      <main>
        <Hero />
        <div className="service-ribbon">
          <span>WORKFORCE ACCOMMODATION</span>
          <i>+</i>
          <span>CORPORATE SPACES</span>
          <i>+</i>
          <span>COMMERCIAL LEASING</span>
        </div>
        <section id="about" className="section about">
          <p className="eyebrow">THE RIGHT SPACE CHANGES EVERYTHING</p>
          <h2 data-reveal>
            Your people need a place.
            <br />
            Your business needs <em>a partner.</em>
          </h2>
          <div className="about-bottom">
            <span className="monogram" aria-hidden="true">
              RAN<span>↗</span>
            </span>
            <div>
              <p>
                At {company.name}, we connect businesses with spaces that work for them. From
                workforce accommodation to corporate facilities and commercial premises, our focus
                is on understanding what your operation needs.
              </p>
              <p>
                Based in Dubai Investment Park, we bring a practical, personal approach to your
                property requirements: location, capacity, facilities and budget.
              </p>
              <a className="text-link" href="#contact">
                Meet your next property partner <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </section>
        <section id="services" className="section">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">01 — OUR EXPERTISE</p>
              <h2>
                Three ways.
                <br />
                <em>One way forward.</em>
              </h2>
            </div>
            <p>
              Property solutions shaped around
              <br />
              the way your business works.
            </p>
          </div>
          <div className="services-grid">
            {services.map((s) => {
              const Icon = icon[s.icon];
              return (
                <article key={s.id} className="service-card" data-reveal>
                  <div className={`service-visual visual-${s.id}`} aria-hidden="true">
                    <Icon strokeWidth={0.75} />
                    <span>{s.number} / DUBAI</span>
                    <div className="visual-lines" />
                  </div>
                  <div className="service-body">
                    <p className="eyebrow">{s.short}</p>
                    <h3>{s.title}</h3>
                    <p>{s.description}</p>
                    <div className="service-tags">
                      {s.tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                    <button className="text-link" onClick={() => setSelected(s)}>
                      Explore service <ArrowUpRight size={16} />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
        <section className="section approach" id="approach">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">02 — THE WAY WE WORK</p>
              <h2>
                From a requirement
                <br />
                to <em>the right address.</em>
              </h2>
            </div>
            <a className="text-link" href="#contact">
              Start a conversation <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="steps">
            {[
              [
                '01',
                'Understand',
                'Tell us what matters.',
                'Your location, capacity, budget and timeline. We begin with your business and the people behind it.',
              ],
              [
                '02',
                'Explore',
                'See the possibilities.',
                'Discuss suitable options and arrange viewings. Review facilities and how the space could work for you.',
              ],
              [
                '03',
                'Move forward',
                'Make your next move.',
                'Confirm availability, scope and lease terms with the team before planning your next steps.',
              ],
            ].map(([n, label, title, text]) => (
              <article key={n} data-reveal>
                <span>
                  {n} / {label.toUpperCase()}
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="section portfolio">
          <div className="portfolio-art" aria-hidden="true">
            <span>
              SPACES.
              <br />
              PEOPLE.
              <br />
              <em>POSSIBILITY.</em>
            </span>
            <Building2 strokeWidth={0.4} />
          </div>
          <div data-reveal>
            <p className="eyebrow">PROPERTY EXPERIENCE</p>
            <h2>
              More than
              <br />
              <em>square feet.</em>
            </h2>
            <p>
              A property should support the way your business operates. Our existing portfolio
              includes accommodation leasing and property management, alongside corporate and
              commercial property services.
            </p>
            <p>
              Talk to the team about relevant examples and current options. We’ll help you identify
              which details need to be confirmed for your requirements.
            </p>
            <a className="text-link" href="#contact">
              Discuss your requirements <ArrowUpRight size={15} />
            </a>
          </div>
        </section>
        <section id="faq" className="section faq">
          <div data-reveal>
            <p className="eyebrow">GOOD QUESTIONS. CLEAR ANSWERS.</p>
            <h2>
              A little clarity.
              <br />
              <em>Before your next move.</em>
            </h2>
          </div>
          <div className="faq-list">
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>
                  {q}
                  <Plus size={17} className="plus" />
                  <Minus size={17} className="minus" />
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>
        <section id="contact" className="section contact">
          <div data-reveal>
            <p className="eyebrow">03 — YOUR NEXT CHAPTER</p>
            <h2>
              Let’s make
              <br />
              <em>room for you.</em>
            </h2>
            <p>
              A new team. A bigger operation. A better location.
              <br />
              Tell us what you have in mind.
            </p>
            <a className="contact-email" href={`mailto:${company.email}`}>
              {company.email}
              <ArrowUpRight size={22} />
            </a>
            <div className="contact-details">
              <a href={company.phoneHref}>
                <Phone size={16} />
                {company.phone}
              </a>
              <a href={company.maps} target="_blank" rel="noreferrer">
                <MapPin size={17} />
                <span>
                  {company.address}
                  <small>Open in Google Maps ↗</small>
                </span>
              </a>
            </div>
            <p className="contact-note">
              Availability, facilities and commercial terms are confirmed individually for each
              enquiry.
            </p>
          </div>
          <EnquiryForm service={service} onServiceChange={setService} />
        </section>
      </main>
      <footer className="footer">
        <div className="footer-top">
          <Logo />
          <span>Spaces for what’s next.</span>
          <a href="#home" className="text-link">
            Back to top <ArrowUp size={15} />
          </a>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {company.legalName}
          </p>
          <nav aria-label="Footer navigation">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Enquiry</a>
            <button onClick={() => setSelected({ privacy: true, title: 'Your privacy' })}>
              Privacy
            </button>
          </nav>
        </div>
      </footer>
      <dialog
        ref={dialog}
        className="detail-dialog"
        onClose={() => setSelected(null)}
        onClick={(e) => {
          if (e.target === dialog.current) dialog.current.close();
        }}
        aria-labelledby="dialog-title"
      >
        {selected && (
          <>
            <button
              className="dialog-close"
              aria-label="Close details"
              onClick={() => dialog.current.close()}
            >
              <X size={22} />
            </button>
            <p className="eyebrow">
              {selected.privacy ? 'PRIVACY INFORMATION' : 'OUR EXPERTISE / ' + selected.number}
            </p>
            <h2 id="dialog-title">{selected.title}</h2>
            {selected.privacy ? (
              <>
                <p>
                  The enquiry form prepares a message locally in your browser. It does not
                  automatically submit your information to this website or save it in a database.
                </p>
                <p>
                  If you choose “Open email app,” the details are passed to your chosen email
                  application. You decide whether to send the message to {company.email}. Email
                  services process the message under their own terms.
                </p>
                <p>
                  The map link opens Google Maps. Contact us at{' '}
                  <a href={`mailto:${company.email}`}>{company.email}</a> with questions about your
                  enquiry.
                </p>
              </>
            ) : (
              <>
                <p>{selected.description}</p>
                <ul>
                  {selected.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="button button-dark"
                  onClick={() => enquire(selected.title)}
                >
                  Enquire about this service <ArrowUpRight size={16} />
                </a>
              </>
            )}
          </>
        )}
      </dialog>
    </div>
  );
}
*/

export default function App() {
  const [language, setLanguage] = useState('en');
  const [introActive, setIntroActive] = useState(true);
  const logoRef = useRef(null);
  return <SmoothScroll>
    <Header logoRef={logoRef} introActive={introActive} language={language} setLanguage={setLanguage} />
    <Hero language={language} />
    <ImmersiveHome includeHero={false} />
    {introActive && <Intro logoRef={logoRef} language={language} onComplete={() => setIntroActive(false)} />}
  </SmoothScroll>;
}
