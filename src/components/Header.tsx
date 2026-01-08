import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/coffee-code-logo.png";

const Header = () => {
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Coffee Code Studio" className="w-8 h-8 rounded" />
          <span className="font-display font-bold text-lg neon-text-cyan">Coffee Code Studio</span>
        </div>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <div className="px-3 py-1 bg-secondary/20 border border-secondary rounded-full text-secondary text-xs font-display uppercase tracking-wider">
            {t.demo}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
