import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/coffee-code-logo.png";

const Header = () => {
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0 flex-shrink-0">
          <img src={logo} alt="Coffee Code Studio" className="w-7 h-7 sm:w-8 sm:h-8 rounded flex-shrink-0" width={32} height={32} />
          <span className="font-display font-bold text-sm sm:text-lg neon-text-cyan whitespace-nowrap">
            <span className="hidden min-[400px]:inline">Coffee Code Studio</span>
            <span className="min-[400px]:hidden">CCS</span>
          </span>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
          <LanguageSwitcher />
          <div className="px-2 sm:px-3 py-1 bg-secondary/20 border border-secondary rounded-full text-secondary text-[10px] sm:text-xs font-display uppercase tracking-wider whitespace-nowrap">
            {t.demo}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
