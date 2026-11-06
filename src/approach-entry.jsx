import React from 'react';
import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';
import ApproachProcess from './sections/ApproachProcess.jsx';
import './approach-tailwind.css';

// Mount before the shared behaviour attaches translations and scroll effects.
flushSync(() => createRoot(document.getElementById('approach-process-root')).render(<ApproachProcess />));
async function loadSharedScripts() {
for (const source of ['/phone-lib.js', '/site-language.js', '/full-site.js']) {
  await new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = source;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

}
loadSharedScripts();
