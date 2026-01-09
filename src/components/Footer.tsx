import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Coffee Code Studio. All rights reserved.
        </p>
        <a
          href="https://www.linkedin.com/in/rami-e-453b77330/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <Linkedin className="w-5 h-5" />
          <span className="text-sm">Kontakt</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
