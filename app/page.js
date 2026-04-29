import Navbar from '@/components/navbar/Navbar';
import Hero from '@/components/hero/Hero';
import AboutUs from '@/components/sections/AboutUs';
import Features from '@/components/sections/Features';
import OurMission from '@/components/sections/OurMission';
import Pricing from '@/components/sections/Pricing';
import ContactUs from '@/components/sections/ContactUs';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Features />
        <OurMission />
        <Pricing />
        <ContactUs />
      </main>
    </>
  );
}
