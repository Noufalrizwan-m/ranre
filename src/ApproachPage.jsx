import RanNav from './site-components/RanNav.jsx';
import Opening from './site-components/Opening.jsx';
import FeatureBanner from './site-components/FeatureBanner.jsx';
import Services from './site-components/Services.jsx';
import ApproachPageIntro from './site-components/ApproachPageIntro.jsx';
import Process from './site-components/Process.jsx';
import ApproachNote from './site-components/ApproachNote.jsx';
import Contact from './site-components/Contact.jsx';
import Footer from './site-components/Footer.jsx';

export default function ApproachPage() {
  return (
    <>
      <RanNav />
      <main id="home">
        <Opening />
        <FeatureBanner />
        <Services />
        <ApproachPageIntro />
        <Process />
        <ApproachNote />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
