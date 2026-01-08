import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Schedule from "@/components/Schedule";
import About from "@/components/About";
import NowPlaying from "@/components/NowPlaying";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <Header />
      <Hero />
      <Schedule />
      <About />
      <NowPlaying />
    </div>
  );
};

export default Index;
