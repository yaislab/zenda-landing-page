import { Button } from "@/components/ui/button";
import { MessageSquare, Twitter, Instagram, Music } from "lucide-react";
import ZendaLogo from "./ZendaLogo";

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+59171234567?text=Hola%20Zenda", "_blank");
  };

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/ZendaFinance", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/ZendaFinance", label: "Instagram" },
    { icon: Music, href: "https://tiktok.com/@ZendaFinance", label: "TikTok" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <ZendaLogo className="w-12 h-12" />
              <span className="font-heading text-2xl font-bold">Zenda</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              La plataforma fintech que revoluciona las remesas a Bolivia usando 
              stablecoins y WhatsApp. Rápido, económico, simple y seguro.
            </p>
            <Button 
              variant="secondary" 
              onClick={handleWhatsAppClick}
              className="hover-glow"
            >
              <MessageSquare className="w-4 h-4" />
              Contáctanos en WhatsApp
            </Button>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="font-heading text-lg font-bold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>
                <a href="#como-funciona" className="hover:text-secondary transition-smooth">
                  Cómo Funciona
                </a>
              </li>
              <li>
                <a href="#por-que-zenda" className="hover:text-secondary transition-smooth">
                  Por qué Zenda
                </a>
              </li>
              <li>
                <a href="#impacto-social" className="hover:text-secondary transition-smooth">
                  Impacto Social
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/+59171234567?text=Necesito%20soporte" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-smooth"
                >
                  Soporte
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="text-center md:text-right">
            <h3 className="font-heading text-lg font-bold mb-6">Síguenos</h3>
            <div className="flex justify-center md:justify-end gap-4 mb-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-smooth"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              @ZendaFinance en todas las redes
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-primary-foreground/80 text-sm text-center md:text-left">
              <p>© 2025 Zenda Finance. Todos los derechos reservados.</p>
              <p className="mt-1">
                Potenciado por blockchain | Construido para el{" "}
                <span className="text-secondary font-semibold">
                  Ethereum Bolivia Buildathon 2025
                </span>
              </p>
            </div>
            <div className="flex items-center gap-4 text-sm text-primary-foreground/80">
              <a href="#" className="hover:text-secondary transition-smooth">Términos</a>
              <span>•</span>
              <a href="#" className="hover:text-secondary transition-smooth">Privacidad</a>
              <span>•</span>
              <a href="#" className="hover:text-secondary transition-smooth">Legal</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;