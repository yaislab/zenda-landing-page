import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowRight, DollarSign, Clock, Zap } from "lucide-react";
import ZendaLogo from "./ZendaLogo";
import heroImage from "@/assets/zenda-hero.jpg";
import { useNavigate } from "react-router-dom";
import DynamicExchangeRate from "./DynamicExchangeRate";

const HeroSection = () => {
  const navigate = useNavigate();
  
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+59171234567?text=enviar", "_blank");
  };

  const handlePaymentClick = () => {
    navigate('/pay-zenda');
  };

  const handleWaitlistClick = () => {
    window.open('https://docs.google.com/forms/d/1-3X9asbS-wWko_AjcWGjnOBR6XmAaq2w6sE53eKu6cc/edit', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Invisible Payment Button - Top Right Corner */}
      <button
        onClick={handlePaymentClick}
        className="absolute top-4 right-4 w-16 h-16 bg-transparent border-none cursor-pointer z-50"
        aria-label="Ir a página de pago"
        title="Página de pago"
      />

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/60" />
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Money Icons */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full animate-pulse animate-bounce">
          <DollarSign className="w-10 h-10 text-secondary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin-slow" />
        </div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-ping">
          <Zap className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        </div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-secondary/30 rounded-full animate-spin">
          <Clock className="w-6 h-6 text-secondary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/5 rounded-full animate-pulse">
          <MessageSquare className="w-12 h-12 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-bounce-slow" />
        </div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-secondary/40 rounded-full animate-bounce">
          <DollarSign className="w-4 h-4 text-secondary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="absolute top-1/3 right-1/3 w-10 h-10 bg-white/15 rounded-full animate-ping">
          <Zap className="w-5 h-5 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/4 left-1/2 w-6 h-6 bg-secondary/25 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-white/20 rounded-full animate-float-reverse"></div>
        <div className="absolute top-2/3 left-1/3 w-8 h-8 bg-secondary/15 rounded-full animate-spin-slow"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="relative group">
            <ZendaLogo className="w-20 h-20 md:w-24 md:h-24 animate-float hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 bg-secondary/20 rounded-full blur-xl animate-pulse-slow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
        
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up">
          Zenda: Envía rápido,{" "}
          <span className="bg-gradient-to-r from-secondary to-secondary/80 bg-clip-text text-transparent animate-gradient relative">
            vive tranquilo
            <div className="absolute inset-0 bg-secondary/10 blur-sm animate-pulse"></div>
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto font-medium opacity-90 animate-slide-up-delay">
          Envía o recibe dinero de Bolivia a cualquier parte del mundo en minutos, 
          usando stablecoins y nuestro chatbot de WhatsApp.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up-delay-2">
          <Button 
            variant="whatsapp" 
            size="xl" 
            onClick={handleWhatsAppClick}
            className="font-semibold hover:scale-105 transition-transform duration-300 animate-pulse-slow relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <MessageSquare className="w-6 h-6 animate-bounce-slow relative z-10" />
            <span className="relative z-10">Enviar ahora</span>
            <ArrowRight className="w-5 h-5 animate-slide-right relative z-10" />
          </Button>
          
          <Button 
            variant="outline" 
            size="xl"
            className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:border-white/50 hover:scale-105 transition-all duration-300 relative overflow-hidden group shadow-lg"
          >
            <div className="absolute inset-0 bg-secondary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            <span className="relative z-10 font-semibold">Ver cómo funciona</span>
          </Button>
        </div>

        {/* Lista de Espera Button */}
        <div className="mt-6 animate-slide-up-delay-3">
          <Button 
            variant="outline" 
            size="lg" 
            onClick={handleWaitlistClick}
            className="font-medium hover:scale-105 transition-all duration-300 bg-gradient-to-r from-secondary/20 to-primary/20 backdrop-blur-sm shadow-lg hover:from-secondary/30 hover:to-primary/30 border-secondary/30 hover:border-secondary/50 text-white group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-primary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            <span className="relative z-10 flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
              Formulario de Lista de Espera
              <ArrowRight className="w-4 h-4 animate-slide-right" />
            </span>
          </Button>
          <p className="text-sm text-white/70 mt-2 text-center animate-fade-in">
            ¡Sé de los primeros en probar Zenda!
          </p>
        </div>
        
        {/* Enhanced Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-slide-up-delay-3">
          <div className="text-center hover:scale-110 transition-transform duration-300 cursor-pointer group relative">
            <div className="absolute inset-0 bg-secondary/5 rounded-2xl blur-xl group-hover:bg-secondary/15 transition-all duration-300"></div>
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 group-hover:border-secondary/30 transition-all duration-300">
              <DynamicExchangeRate 
                variant="hero"
                className="mb-2 animate-count-up group-hover:animate-money-bounce"
              />
              <div className="text-sm opacity-80 group-hover:text-secondary transition-colors duration-300">por USDT</div>
              <div className="absolute top-2 right-2 w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <div className="text-center hover:scale-110 transition-transform duration-300 cursor-pointer group relative">
            <div className="absolute inset-0 bg-secondary/5 rounded-2xl blur-xl group-hover:bg-secondary/15 transition-all duration-300"></div>
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 group-hover:border-secondary/30 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2 animate-count-up-delay group-hover:animate-pulse">
                &lt; 5 min
              </div>
              <div className="text-sm opacity-80 group-hover:text-secondary transition-colors duration-300">tiempo de envío</div>
              <div className="absolute top-2 right-2 w-3 h-3 bg-secondary rounded-full animate-ping"></div>
            </div>
          </div>
          
          <div className="text-center hover:scale-110 transition-transform duration-300 cursor-pointer group relative">
            <div className="absolute inset-0 bg-secondary/5 rounded-2xl blur-xl group-hover:bg-secondary/15 transition-all duration-300"></div>
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 group-hover:border-secondary/30 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2 animate-count-up-delay-2 group-hover:animate-spin-slow">
                24/7
              </div>
              <div className="text-sm opacity-80 group-hover:text-secondary transition-colors duration-300">disponible</div>
              <div className="absolute top-2 right-2 w-3 h-3 bg-secondary rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce group cursor-pointer">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center group-hover:border-secondary transition-colors duration-300">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse group-hover:bg-secondary transition-colors duration-300"></div>
        </div>
        <div className="text-xs text-white/60 mt-2 animate-pulse">Scroll</div>
      </div>
    </section>
  );
};

export default HeroSection;