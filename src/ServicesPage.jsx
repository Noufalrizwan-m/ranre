import RanNav from './site-components/RanNav.jsx';
import Opening from './site-components/Opening.jsx';
import FeatureBanner from './site-components/FeatureBanner.jsx';
import ServicesPageHero from './site-components/ServicesPageHero.jsx';
import Services2 from './site-components/Services2.jsx';
import ServiceConsiderations from './site-components/ServiceConsiderations.jsx';
import Approach from './site-components/Approach.jsx';
import Contact from './site-components/Contact.jsx';
import Footer from './site-components/Footer.jsx';

export default function ServicesPage() {
  return (
    <>
      <RanNav />
      <main id="home">
        <Opening />
        <FeatureBanner />
        <ServicesPageHero />
        <Services2 />
        <ServiceConsiderations />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
