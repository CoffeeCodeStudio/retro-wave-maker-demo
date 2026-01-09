import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Schedule from "@/components/Schedule";
import MixcloudPlayer from "@/components/MixcloudPlayer";
import About from "@/components/About";
import DemoBanner from "@/components/DemoBanner";
import NowPlaying from "@/components/NowPlaying";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background pb-20">
        <Header />
        <Hero />
        <Schedule />
        <MixcloudPlayer />
        <About />
        <DemoBanner />
        <NowPlaying />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
