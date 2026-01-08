import { Radio } from "lucide-react";

const NowPlaying = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-t border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-center gap-4">
        <div className="flex items-center gap-2 text-primary">
          <Radio className="w-5 h-5 animate-pulse" />
          <span className="font-display text-xs uppercase tracking-wider">Now Playing</span>
        </div>
        <span className="text-foreground font-medium">Din Radio - 80s & 90s Hits</span>
      </div>
    </footer>
  );
};

export default NowPlaying;
