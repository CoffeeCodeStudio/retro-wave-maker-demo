import ScheduleCard from "./ScheduleCard";
import { useLanguage } from "@/contexts/LanguageContext";

const Schedule = () => {
  const { t } = useLanguage();

  const scheduleData = [
    { title: "Neon Nights", genre: "80s Synthpop & New Wave", day: t.friday, time: "20:00 - 00:00", isLive: true },
    { title: "Retro Rewind", genre: "90s Dance & Eurodance", day: t.saturday, time: "18:00 - 22:00" },
    { title: "Sunday Grooves", genre: "80s Rock & Power Ballads", day: t.sunday, time: "16:00 - 20:00" },
    { title: "Throwback Thursday", genre: "90s Hip-Hop & R&B", day: t.thursday, time: "21:00 - 01:00" },
    { title: "Midnight Mix", genre: "80s & 90s Mix", day: t.wednesday, time: "22:00 - 02:00" },
    { title: "Vinyl Sessions", genre: "Klassisk Vinyl Spins", day: t.monday, time: "19:00 - 22:00" },
  ];

  return (
    <section id="schedule" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
          {t.upcomingDjSets}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
          {t.scheduleSub}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scheduleData.map((item, index) => (
            <ScheduleCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
