import { Music, Radio, Users } from "lucide-react";

const stats = [
  { value: "20+", label: "År", icon: null },
  { value: "5K+", label: "Vinyl", icon: null },
  { value: "100K+", label: "Lyssnare", icon: null },
];

const features = [
  { title: "80s Hits", description: "Synth-pop, rock och disco-klassiker", icon: Music },
  { title: "90s Favoriter", description: "Eurodance, grunge och R&B", icon: Radio },
  { title: "Live Varje Vecka", description: "Fräscha mixar och specialshower", icon: Users },
];

const About = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-8 gradient-text">
          OM DJ ADOLFO
        </h2>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Med över 20 års erfarenhet av att spinna de bästa låtarna från 80- och 90-talet har DJ Adolfo blivit en legend inom retro-musikscenen.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Hans passion för denna gyllene era av musik är smittsam och tar varje lyssnare på en nostalgisk resa genom tidernas mest minnesvärda låtar.
          </p>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-12 md:gap-20 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold neon-text-cyan mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300">
              <feature.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
