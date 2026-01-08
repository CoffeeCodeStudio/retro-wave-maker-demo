import { Sparkles, Check } from "lucide-react";

const DemoBanner = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/30 rounded-2xl p-8 md:p-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="font-display text-sm uppercase tracking-wider text-primary">Demo</span>
          </div>
          
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Gillar du vad du ser?
          </h2>
          
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Denna sida är en demonstration av vad jag kan bygga åt dig. Allt är anpassningsbart efter dina önskemål.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-left max-w-2xl mx-auto">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-primary" />
              <span className="text-foreground text-sm">Anpassade färger</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-primary" />
              <span className="text-foreground text-sm">Din egen profilbild</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-primary" />
              <span className="text-foreground text-sm">Ditt eget schema</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-primary" />
              <span className="text-foreground text-sm">Mixcloud-integration</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-primary" />
              <span className="text-foreground text-sm">Responsiv design</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-primary" />
              <span className="text-foreground text-sm">SEO-optimerad</span>
            </div>
          </div>
          
          <a 
            href="mailto:din@email.com"
            className="inline-block px-8 py-3 font-display font-semibold bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all duration-300 uppercase tracking-wider"
          >
            Kontakta mig
          </a>
        </div>
      </div>
    </section>
  );
};

export default DemoBanner;
