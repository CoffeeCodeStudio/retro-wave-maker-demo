import { useState } from "react";
import { Sparkles, Check, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const DemoBanner = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const features = [
    t.customColors,
    t.yourPhoto,
    t.yourSchedule,
    t.streamIntegration,
    t.responsiveDesign,
    t.seoOptimized,
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim()) {
      toast({
        title: "Fyll i alla fält",
        description: "Både namn och e-post krävs.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Open email client with pre-filled info
    const subject = encodeURIComponent(`Kontaktförfrågan från ${name}`);
    const body = encodeURIComponent(`Hej Rami!\n\nMitt namn är ${name} och jag är intresserad av att veta mer.\n\nDu kan nå mig på: ${email}\n\nMvh,\n${name}`);
    window.location.href = `mailto:rami.elsaneh@protonmail.com?subject=${subject}&body=${body}`;
    
    setIsSubmitting(false);
    toast({
      title: "E-postklient öppnad!",
      description: "Skicka meddelandet för att kontakta Rami.",
    });
  };

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
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <Input
              type="text"
              placeholder="Ditt namn"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-background/50 border-primary/30 text-foreground placeholder:text-muted-foreground"
              maxLength={100}
            />
            <Input
              type="email"
              placeholder="Din e-postadress"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-background/50 border-primary/30 text-foreground placeholder:text-muted-foreground"
              maxLength={255}
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full font-display font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300 uppercase tracking-wider"
            >
              <Send className="w-4 h-4 mr-2" />
              {t.contactRami}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DemoBanner;
