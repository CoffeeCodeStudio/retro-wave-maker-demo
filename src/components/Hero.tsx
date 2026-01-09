import djPortrait from "@/assets/dj-portrait.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  const scrollToSchedule = () => {
    document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-10 overflow-hidden">
      
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-purple-orb rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-radial rounded-full blur-3xl opacity-40" />
      
      {/* On Air Badge */}
      <div className="mb-8 animate-pulse-glow">
        <div className="flex items-center gap-2 px-6 py-2 rounded-lg border-2 border-secondary neon-border-magenta bg-background/50">
          <span className="w-3 h-3 bg-secondary rounded-full animate-pulse" />
          <span className="font-display font-semibold text-secondary uppercase tracking-wider">{t.onAir}</span>
        </div>
      </div>

      {/* DJ Portrait */}
      <div className="relative mb-8 animate-float">
        <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 neon-border-magenta">
          <img 
            src={djPortrait} 
            alt="DJ Namn" 
            className="w-full h-full object-cover"
            width={288}
            height={288}
            fetchPriority="high"
          />
        </div>
        {/* Glow ring behind the image */}
        <div className="absolute inset-0 -z-10 w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-r from-primary via-secondary to-accent blur-xl opacity-50" />
      </div>

      {/* DJ Name - Placeholder */}
      <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 gradient-text">
        DITT NAMN
      </h1>

      {/* Tagline */}
      <p className="text-xl md:text-2xl text-muted-foreground mb-2">
        {t.tagline} <span className="neon-text-cyan">80s</span> & <span className="neon-text-magenta">90s</span>
      </p>

      {/* Radio Vibes */}
      <div className="flex items-center gap-3 text-primary mb-8">
        <span className="text-lg animate-wave-pulse">((•))</span>
        <span className="font-display text-sm tracking-[0.3em] uppercase">{t.radioVibes}</span>
        <span className="text-lg animate-wave-pulse">((•))</span>
      </div>

      {/* CTA Button */}
      <button 
        onClick={scrollToSchedule}
        className="px-8 py-3 font-display font-semibold text-foreground border-2 border-primary rounded-lg neon-border-cyan hover:bg-primary hover:text-primary-foreground transition-all duration-300 uppercase tracking-wider"
      >
        {t.viewSchedule}
      </button>
    </section>
  );
};

export default Hero;
