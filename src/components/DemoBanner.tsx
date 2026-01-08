import { Sparkles, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const DemoBanner = () => {
  const { t } = useLanguage();

  const features = [
    t.customColors,
    t.yourPhoto,
    t.yourSchedule,
    t.mixcloudIntegration,
    t.responsiveDesign,
    t.seoOptimized,
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/30 rounded-2xl p-8 md:p-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="font-display text-sm uppercase tracking-wider text-primary">{t.demo}</span>
          </div>
          
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            {t.likeWhatYouSee}
          </h2>
          
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            {t.demoText}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-left max-w-2xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-foreground text-sm">{feature}</span>
              </div>
            ))}
          </div>
          
          <a 
            href="mailto:rami.elsaneh@protonmail.com"
            className="inline-block px-8 py-3 font-display font-semibold bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all duration-300 uppercase tracking-wider"
          >
            {t.contactRami}
          </a>
        </div>
      </div>
    </section>
  );
};

export default DemoBanner;
