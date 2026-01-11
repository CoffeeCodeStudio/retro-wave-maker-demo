import { Code, Layers, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const RecentBuilds = () => {
  const { t } = useLanguage();

  const builds = [
    { 
      title: "Retro Radio Template", 
      description: t.build1Desc,
      icon: Layers,
      tags: ["React", "Tailwind", "TypeScript"]
    },
    { 
      title: "Synth Wave Dashboard", 
      description: t.build2Desc,
      icon: Zap,
      tags: ["Vite", "Framer Motion", "CSS3"]
    },
    { 
      title: "Neon Portfolio", 
      description: t.build3Desc,
      icon: Code,
      tags: ["React", "Responsive", "SEO"]
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
          {t.recentBuilds}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
          {t.recentBuildsSub}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {builds.map((build, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 neon-glow-cyan"
            >
              <build.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {build.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {build.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {build.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentBuilds;
