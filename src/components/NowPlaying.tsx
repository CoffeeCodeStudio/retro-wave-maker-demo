import { Code } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const NowPlaying = () => {
  const { t } = useLanguage();

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-4">
        <div className="flex items-center gap-2 text-primary">
          <Code className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="font-display text-[10px] sm:text-xs uppercase tracking-wider">Coffee Code Studio</span>
        </div>
        <span className="text-muted-foreground text-[10px] sm:text-sm">Skapad av Rami • rami.elsaneh@protonmail.com</span>
      </div>
    </footer>
  );
};

export default NowPlaying;
