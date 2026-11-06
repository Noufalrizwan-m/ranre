import RanIntro from './site-components/RanIntro.jsx';
import RanNav from './site-components/RanNav.jsx';
import Opening from './site-components/Opening.jsx';
import FeatureBanner from './site-components/FeatureBanner.jsx';
import Services from './site-components/Services.jsx';
import Approach from './site-components/Approach.jsx';
import Contact from './site-components/Contact.jsx';
import Footer from './site-components/Footer.jsx';

export default function HomePage() {
  return (
    <>
      <RanIntro />
      <RanNav />
      <main id="home">
        <Opening />
        <FeatureBanner />
        <Services />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
