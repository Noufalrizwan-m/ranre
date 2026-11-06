import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const chapters = [
  ['01', 'Workforce living', 'Spaces designed around the people who keep Dubai moving.'],
  ['02', 'Corporate facilities', 'Workplaces that give growing teams room to think bigger.'],
  ['03', 'Commercial spaces', 'Addresses built for visibility, operations and ambition.'],
];

export default function Journey() {
  const root = useRef(null);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: no-preference)');
    if (!motion.matches) return undefined;
    const ctx = gsap.context(() => {
      const scene = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          pin: '.journey-stage',
          anticipatePin: 1,
        },
      });
      scene
        .fromTo('[data-journey-city]', { scale: 1.16, opacity: 1 }, { scale: 1.42, opacity: .18, ease: 'none' }, 0)
        .fromTo('[data-journey-entry]', { scale: 1.22, opacity: 0, yPercent: 8 }, { scale: .86, opacity: 1, yPercent: 0, ease: 'none' }, .08)
        .fromTo('[data-journey-frame]', { opacity: 0, scale: .8 }, { opacity: 1, scale: 1, ease: 'none' }, .18)
        .to('[data-journey-entry]', { scale: .7, opacity: .78, ease: 'none' }, .54)
        .to('[data-journey-frame]', { scale: 1.12, ease: 'none' }, .54)
        .to('[data-journey-city]', { scale: 1, opacity: 1, ease: 'none' }, .8)
        .to('[data-journey-entry], [data-journey-frame]', { opacity: 0, scale: .92, ease: 'none' }, .83)
        .fromTo('[data-journey-outro]', { y: 28, opacity: 0 }, { y: 0, opacity: 1, ease: 'none' }, .88);

      gsap.utils.toArray('[data-journey-chapter]').forEach((chapter, index) => {
        gsap.fromTo(chapter, { opacity: 0, y: 34, filter: 'blur(8px)' }, {
          opacity: 1, y: 0, filter: 'blur(0px)', ease: 'none',
          scrollTrigger: { trigger: root.current, start: `${28 + index * 14}% top`, end: `${42 + index * 14}% top`, scrub: true },
        });
        gsap.to(chapter, {
          opacity: 0, y: -24, ease: 'none',
          scrollTrigger: { trigger: root.current, start: `${43 + index * 14}% top`, end: `${52 + index * 14}% top`, scrub: true },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return <section ref={root} className="journey" aria-label="How RANRE shapes business spaces">
    <div className="journey-stage">
      <div className="journey-city" data-journey-city aria-hidden="true" />
      <div className="journey-vignette" aria-hidden="true" />
      <p className="journey-kicker">A RANRE JOURNEY · DUBAI</p>
      <div className="journey-entry" data-journey-entry>
        <img src="/assets/exploded-commercial.png" alt="" />
      </div>
      <div className="journey-frame" data-journey-frame aria-hidden="true"><span /><span /><span /></div>
      <div className="journey-copy" aria-live="polite">
        {chapters.map(([number, title, text]) => <article key={number} data-journey-chapter>
          <span>{number}</span><h2>{title}</h2><p>{text}</p>
        </article>)}
      </div>
      <div className="journey-outro" data-journey-outro>
        <span>BACK TO THE CITY</span><h2>One partner.<br /><em>Every next move.</em></h2>
      </div>
      <div className="journey-progress" aria-hidden="true"><i /><i /><i /></div>
    </div>
  </section>;
}
