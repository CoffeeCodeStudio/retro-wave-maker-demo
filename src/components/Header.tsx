import { Radio } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Radio className="w-5 h-5 text-primary" />
          <span className="font-display font-bold text-lg neon-text-cyan">RETRO RADIO</span>
        </div>
        <div className="px-3 py-1 bg-secondary/20 border border-secondary rounded-full text-secondary text-xs font-display uppercase tracking-wider">
          Demo
        </div>
      </div>
    </header>
  );
};

export default Header;
