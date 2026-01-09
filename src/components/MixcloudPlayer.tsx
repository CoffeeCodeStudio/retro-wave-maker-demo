const MixcloudPlayer = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
          LYSSNA NU
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
          Streama de senaste mixarna direkt via Mixcloud
        </p>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-6 neon-glow-cyan">
            <iframe 
              width="100%" 
              height="180" 
              src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&autoplay=1&feed=%2FDjLobo75%2F" 
              frameBorder="0"
              allow="autoplay"
              className="rounded-lg"
              title="Mixcloud Player"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MixcloudPlayer;
