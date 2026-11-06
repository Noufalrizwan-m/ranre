import React from 'react';
import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';
import HomePage from './HomePage.jsx';
import AboutPage from './AboutPage.jsx';
import ServicesPage from './ServicesPage.jsx';
import ApproachPage from './ApproachPage.jsx';
import './approach-tailwind.css';

const pages = { home: HomePage, about: AboutPage, services: ServicesPage, approach: ApproachPage };
const Page = pages[document.body.dataset.page || 'home'] || HomePage;
flushSync(() => createRoot(document.getElementById('root')).render(<Page />));

// The existing interaction and translation layer is loaded after React mounts.
async function startInteractions() {
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
startInteractions().catch(error => console.error('Unable to start site interactions', error));
