const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 flex items-center justify-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Coffee Code Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
