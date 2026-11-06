import RanNav from './site-components/RanNav.jsx';
import Opening2 from './site-components/Opening2.jsx';
import AboutStory from './site-components/AboutStory.jsx';
import AboutVision from './site-components/AboutVision.jsx';
import FeatureBanner from './site-components/FeatureBanner.jsx';
import Services from './site-components/Services.jsx';
import Approach from './site-components/Approach.jsx';
import Contact from './site-components/Contact.jsx';
import Footer from './site-components/Footer.jsx';

export default function AboutPage() {
  return (
    <>
      <RanNav />
      <main id="home">
        <Opening2 />
        <AboutStory />
        <AboutVision />
        <FeatureBanner />
        <Services />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
