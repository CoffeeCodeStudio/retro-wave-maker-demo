interface ScheduleCardProps {
  title: string;
  genre: string;
  day: string;
  time: string;
  isLive?: boolean;
}

const ScheduleCard = ({ title, genre, day, time, isLive }: ScheduleCardProps) => {
  return (
    <div className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:neon-glow-cyan">
      {isLive && (
        <div className="absolute -top-3 left-4 px-3 py-1 bg-secondary text-secondary-foreground text-xs font-display font-bold rounded uppercase">
          Live
        </div>
      )}
      <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:neon-text-cyan transition-all duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm mb-4">{genre}</p>
      <div className="flex justify-between items-center text-sm">
        <span className="text-primary font-semibold">{day}</span>
        <span className="text-muted-foreground">{time}</span>
      </div>
    </div>
  );
};

export default ScheduleCard;
