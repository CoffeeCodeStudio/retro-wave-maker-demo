import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "sv" | "en" | "es";

interface Translations {
  // Header
  demo: string;
  
  // Hero
  onAir: string;
  tagline: string;
  radioVibes: string;
  viewSchedule: string;
  
  // Schedule
  upcomingDjSets: string;
  scheduleSub: string;
  friday: string;
  saturday: string;
  sunday: string;
  thursday: string;
  wednesday: string;
  monday: string;
  
  // About
  aboutArtist: string;
  aboutText1: string;
  aboutText2: string;
  years: string;
  vinyl: string;
  listeners: string;
  feature1Title: string;
  feature1Desc: string;
  feature2Title: string;
  feature2Desc: string;
  feature3Title: string;
  feature3Desc: string;
  
  // Demo Banner
  likeWhatYouSee: string;
  demoText: string;
  customColors: string;
  yourPhoto: string;
  yourSchedule: string;
  streamIntegration: string;
  responsiveDesign: string;
  seoOptimized: string;
  contactRami: string;
  
  // Now Playing
  nowPlaying: string;
  listenLive: string;

  // Recent Builds
  recentBuilds: string;
  recentBuildsSub: string;
  build1Desc: string;
  build2Desc: string;
  build3Desc: string;
}

const translations: Record<Language, Translations> = {
  sv: {
    demo: "Demo",
    onAir: "On Air",
    tagline: "Your Gateway to the",
    radioVibes: "Retro Radio Vibes",
    viewSchedule: "Visa Schema",
    upcomingDjSets: "KOMMANDE DJ SETS",
    scheduleSub: "Missa inte dessa fantastiska shower fyllda med de bästa 80- och 90-tals hits",
    friday: "Fredag",
    saturday: "Lördag",
    sunday: "Söndag",
    thursday: "Torsdag",
    wednesday: "Onsdag",
    monday: "Måndag",
    aboutArtist: "OM ARTISTEN",
    aboutText1: "Med över 20 års erfarenhet av att spinna de bästa låtarna från 80- och 90-talet har du blivit en legend inom retro-musikscenen.",
    aboutText2: "Din passion för denna gyllene era av musik är smittsam och tar varje lyssnare på en nostalgisk resa genom tidernas mest minnesvärda låtar.",
    years: "År",
    vinyl: "Vinyl",
    listeners: "Lyssnare",
    feature1Title: "80s Hits",
    feature1Desc: "Synth-pop, rock och disco-klassiker",
    feature2Title: "90s Favoriter",
    feature2Desc: "Eurodance, grunge och R&B",
    feature3Title: "Live Varje Vecka",
    feature3Desc: "Fräscha mixar och specialshower",
    likeWhatYouSee: "Gillar du vad du ser?",
    demoText: "Denna sida är en demonstration av vad jag kan bygga åt dig. Allt är anpassningsbart efter dina önskemål.",
    customColors: "Anpassade färger",
    yourPhoto: "Din egen profilbild",
    yourSchedule: "Ditt eget schema",
    streamIntegration: "Stream-integration",
    responsiveDesign: "Responsiv design",
    seoOptimized: "SEO-optimerad",
    contactRami: "Kontakta Rami",
    nowPlaying: "Nu Spelas",
    listenLive: "Lyssna Live",
    recentBuilds: "SENASTE PROJEKT",
    recentBuildsSub: "Exempel på vad Coffee Code Studio kan bygga åt dig",
    build1Desc: "Komplett retro-inspirerad landningssida med neon-estetik",
    build2Desc: "Interaktiv dashboard med synthwave-tema och animationer",
    build3Desc: "Modern portfölj med 80-tals vibbar och responsiv design",
  },
  en: {
    demo: "Demo",
    onAir: "On Air",
    tagline: "Your Gateway to the",
    radioVibes: "Retro Radio Vibes",
    viewSchedule: "View Schedule",
    upcomingDjSets: "UPCOMING DJ SETS",
    scheduleSub: "Don't miss these amazing shows filled with the best 80s and 90s hits",
    friday: "Friday",
    saturday: "Saturday",
    sunday: "Sunday",
    thursday: "Thursday",
    wednesday: "Wednesday",
    monday: "Monday",
    aboutArtist: "ABOUT THE ARTIST",
    aboutText1: "With over 20 years of experience spinning the best tracks from the 80s and 90s, you have become a legend in the retro music scene.",
    aboutText2: "Your passion for this golden era of music is contagious and takes every listener on a nostalgic journey through the most memorable songs of all time.",
    years: "Years",
    vinyl: "Vinyl",
    listeners: "Listeners",
    feature1Title: "80s Hits",
    feature1Desc: "Synth-pop, rock and disco classics",
    feature2Title: "90s Favorites",
    feature2Desc: "Eurodance, grunge and R&B",
    feature3Title: "Live Every Week",
    feature3Desc: "Fresh mixes and special shows",
    likeWhatYouSee: "Like what you see?",
    demoText: "This page is a demonstration of what I can build for you. Everything is customizable according to your preferences.",
    customColors: "Custom colors",
    yourPhoto: "Your own profile picture",
    yourSchedule: "Your own schedule",
    streamIntegration: "Stream integration",
    responsiveDesign: "Responsive design",
    seoOptimized: "SEO optimized",
    contactRami: "Contact Rami",
    nowPlaying: "Now Playing",
    listenLive: "Listen Live",
    recentBuilds: "RECENT BUILDS",
    recentBuildsSub: "Examples of what Coffee Code Studio can build for you",
    build1Desc: "Complete retro-inspired landing page with neon aesthetics",
    build2Desc: "Interactive dashboard with synthwave theme and animations",
    build3Desc: "Modern portfolio with 80s vibes and responsive design",
  },
  es: {
    demo: "Demo",
    onAir: "En Vivo",
    tagline: "Tu Puerta a los",
    radioVibes: "Vibraciones Retro Radio",
    viewSchedule: "Ver Horario",
    upcomingDjSets: "PRÓXIMOS DJ SETS",
    scheduleSub: "No te pierdas estos increíbles shows llenos de los mejores éxitos de los 80 y 90",
    friday: "Viernes",
    saturday: "Sábado",
    sunday: "Domingo",
    thursday: "Jueves",
    wednesday: "Miércoles",
    monday: "Lunes",
    aboutArtist: "SOBRE EL ARTISTA",
    aboutText1: "Con más de 20 años de experiencia pinchando los mejores temas de los 80 y 90, te has convertido en una leyenda en la escena de música retro.",
    aboutText2: "Tu pasión por esta era dorada de la música es contagiosa y lleva a cada oyente en un viaje nostálgico a través de las canciones más memorables de todos los tiempos.",
    years: "Años",
    vinyl: "Vinilo",
    listeners: "Oyentes",
    feature1Title: "Éxitos 80s",
    feature1Desc: "Synth-pop, rock y clásicos disco",
    feature2Title: "Favoritos 90s",
    feature2Desc: "Eurodance, grunge y R&B",
    feature3Title: "En Vivo Cada Semana",
    feature3Desc: "Mezclas frescas y shows especiales",
    likeWhatYouSee: "¿Te gusta lo que ves?",
    demoText: "Esta página es una demostración de lo que puedo construir para ti. Todo es personalizable según tus preferencias.",
    customColors: "Colores personalizados",
    yourPhoto: "Tu propia foto de perfil",
    yourSchedule: "Tu propio horario",
    streamIntegration: "Integración de streaming",
    responsiveDesign: "Diseño responsivo",
    seoOptimized: "Optimizado para SEO",
    contactRami: "Contactar a Rami",
    nowPlaying: "Reproduciendo Ahora",
    listenLive: "Escuchar en Vivo",
    recentBuilds: "PROYECTOS RECIENTES",
    recentBuildsSub: "Ejemplos de lo que Coffee Code Studio puede construir para ti",
    build1Desc: "Página de destino completa con estética neón retro",
    build2Desc: "Dashboard interactivo con tema synthwave y animaciones",
    build3Desc: "Portafolio moderno con vibras de los 80 y diseño responsivo",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("sv");

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
