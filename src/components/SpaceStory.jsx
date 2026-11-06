import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const content = {
  en: {
    eyebrow: 'SPACES THAT WORK FOR YOU',
    title: 'A place for what comes next.',
    description: 'Thoughtfully chosen spaces for your people and your business.',
    imageNote: 'All images are illustrative',
    action: 'Discuss your needs',
    cards: [
      { title: 'Workforce accommodation', text: 'Room for your people.', image: '/assets/workforce-concept.jpg', alt: 'Illustrative concept of a contemporary workforce accommodation building' },
      { title: 'Corporate facilities', text: 'Space to move forward.', image: '/assets/business-district.jpg', alt: 'Illustrative concept of a contemporary business district' },
      { title: 'Commercial spaces', text: 'Built around your business.', image: '/assets/commercial-concept.jpg', alt: 'Illustrative concept of a modern commercial facility' },
    ],
  },
  ar: {
    eyebrow: 'مساحات تناسب احتياجاتك',
    title: 'مكان لخطوتك القادمة.',
    description: 'مساحات مختارة بعناية لفريقك وأعمالك.',
    imageNote: 'جميع الصور توضيحية',
    action: 'ناقش احتياجاتك',
    cards: [
      { title: 'سكن الموظفين', text: 'مساحة مناسبة لفريقك.', image: '/assets/workforce-concept.jpg', alt: 'تصور توضيحي لمبنى سكن موظفين معاصر' },
      { title: 'المرافق المكتبية', text: 'مساحة للتقدم.', image: '/assets/business-district.jpg', alt: 'تصور توضيحي لمنطقة أعمال معاصرة' },
      { title: 'المساحات التجارية', text: 'مساحات تناسب أعمالك.', image: '/assets/commercial-concept.jpg', alt: 'تصور توضيحي لمنشأة تجارية حديثة' },
    ],
  },
};

export default function SpaceStory({ language }) {
  const root = useRef(null);
  const t = content[language];
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) return;
    const context = gsap.context(() => {
      gsap.utils.toArray('[data-story-reveal]').forEach(element => {
        gsap.fromTo(element, { autoAlpha: 0, y: 36 }, { autoAlpha: 1, y: 0, duration: .9, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 88%', once: true } });
      });
      gsap.utils.toArray('[data-story-image]').forEach(element => {
        gsap.fromTo(element, { scale: 1.08 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: element.parentElement, start: 'top bottom', end: 'bottom top', scrub: .7 } });
      });
    }, root);
    return () => context.revert();
  }, []);

  return <section id="spaces" ref={root} lang={language} dir={language === 'ar' ? 'rtl' : 'ltr'} aria-labelledby="spaces-title" className="relative snap-start overflow-hidden bg-[#f7f5ef] text-[#22211d]">
    <div className="mx-auto max-w-[1600px] px-5 pt-24 pb-16 sm:px-10 lg:px-[6%] lg:pt-36">
      <div data-story-reveal className="mx-auto max-w-[940px] text-center">
        <p className="font-[Montserrat,Noto_Sans_Arabic,sans-serif] text-base font-normal tracking-[.16em] text-[#8c6e28]">{t.eyebrow}</p>
        <h2 id="spaces-title" className="mt-6 font-[Optima,Noto_Sans_Arabic,Georgia,serif] text-[clamp(40px,5.5vw,76px)] font-normal leading-[1.12] tracking-[-.025em]">{t.title}</h2>
        <p className="mx-auto mt-6 max-w-[650px] font-[Montserrat,Noto_Sans_Arabic,sans-serif] text-[clamp(18px,1.5vw,21px)] font-normal leading-relaxed text-[#535049]">{t.description}</p>
      </div>
      <figure data-story-reveal className="relative mt-14 overflow-hidden rounded-[4px] sm:mt-20">
        <div className="aspect-[4/3] overflow-hidden sm:aspect-[16/8]"><img data-story-image src="/assets/business-district.jpg" alt="" onLoad={() => ScrollTrigger.refresh()} className="h-full w-full object-cover" /></div>
        <figcaption className="absolute right-5 bottom-5 rounded-full bg-[#171b1b]/70 px-4 py-2 font-[Montserrat,Noto_Sans_Arabic,sans-serif] text-[15px] text-white backdrop-blur-md">{t.imageNote}</figcaption>
      </figure>
      <div className="mt-24 grid grid-cols-1 items-start gap-x-[9%] gap-y-20 lg:mt-36 lg:grid-cols-2 lg:gap-y-32">
        {t.cards.map((card, index) => <article key={card.image} data-story-reveal className={index === 1 ? 'lg:mt-32' : index === 2 ? 'lg:col-start-1 lg:ms-[14%]' : ''}>
          <div className={`overflow-hidden ${index === 1 ? 'aspect-[4/5]' : 'aspect-[5/4]'}`}><img data-story-image src={card.image} alt={card.alt} loading="lazy" onLoad={() => ScrollTrigger.refresh()} className="h-full w-full object-cover" /></div>
          <div className="mt-7 flex items-start justify-between gap-5 border-t border-[#c4b693] pt-6">
            <div><h3 className="font-[Optima,Noto_Sans_Arabic,Georgia,serif] text-[clamp(28px,2.8vw,40px)] font-normal leading-tight">{card.title}</h3><p className="mt-3 font-[Montserrat,Noto_Sans_Arabic,sans-serif] text-[17px] leading-relaxed text-[#5b5750]">{card.text}</p></div>
            <span aria-hidden="true" className="font-[Montserrat,sans-serif] text-[16px] text-[#94742d]">0{index + 1}</span>
          </div>
        </article>)}
      </div>
      <div data-story-reveal className="mt-24 flex justify-center pb-16 lg:mt-36"><a href="#enquiry" className="inline-flex min-h-[60px] items-center gap-6 rounded-full bg-[#1b1a17] px-9 font-[Montserrat,Noto_Sans_Arabic,sans-serif] text-[17px] font-semibold text-white no-underline transition-colors hover:bg-[#8d6e27] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8d6e27]">{t.action}<span aria-hidden="true" className="text-2xl font-normal">↗</span></a></div>
    </div>
  </section>;
}
