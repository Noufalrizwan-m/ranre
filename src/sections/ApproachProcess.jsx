import React from 'react';

const steps = [
  { title: 'Understand', text: 'We begin with your people, priorities and practical needs: the type of space, location, size, timing and budget that matter to you.', label: 'LISTEN & LEARN' },
  { title: 'Explore', text: 'We use your requirements to guide a conversation about appropriate property options, helping you consider what is important for your operation.', label: 'CONSIDER OPTIONS' },
  { title: 'Move forward', text: 'As you decide on the next step, we aim to keep communication clear so you can move forward with a better understanding of your options.', label: 'TAKE THE NEXT STEP' },
];

export default function ApproachProcess() {
  return (
    <section className="process-section" id="our-process">
      <div className="mx-auto max-w-[1200px]">
        <div className="process-heading process-aligned-grid">
          <div className="process-heading-copy">
            <p className="eyebrow">HOW WE WORK</p>
            <h2>ONE CONVERSATION.<br />A CLEARER DIRECTION.</h2>
          </div>
        </div>
        <div className="process-list">
          {steps.map((step, index) => (
            <article className="process-aligned-grid" key={step.title}>
              <span className="process-number">{String(index + 1).padStart(2, '0')}</span>
              <div><h3>{step.title}</h3><p>{step.text}</p></div>
              <span className="process-ar">{step.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
