import { Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/30 rounded-2xl p-8 md:p-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mail className="w-6 h-6 text-primary" />
            <span className="font-display text-sm uppercase tracking-wider text-primary">Kontakt</span>
          </div>
          
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Vill du komma i kontakt?
          </h2>
          
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Skicka ett meddelande via LinkedIn så återkommer jag så snart jag kan.
          </p>
          
          <a 
            href="https://www.linkedin.com/in/rami-e-453b77330/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 font-display font-semibold bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all duration-300 uppercase tracking-wider"
          >
            <Linkedin className="w-5 h-5" />
            Kontakta mig på LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
