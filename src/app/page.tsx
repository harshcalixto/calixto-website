// import Image from "next/image";
import HeroSection from '../components/sections/HeroSection';
import HighlightsSection from '../components/sections/HighlightsSection';
// import PlansSection from '../components/sections/PlansSection';
// import TestimonialsSection from '../components/sections/TestimonialsSection';
// import WhyBestSection from '../components/sections/WhyBestSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        {/* <WhyBestSection /> */}
        <HighlightsSection />
        {/* <PlansSection /> */}
        {/* <TestimonialsSection /> */}
      </main>
    </div>
  );
}
