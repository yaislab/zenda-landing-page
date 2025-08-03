import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Globe } from "lucide-react";
import DynamicExchangeRate from "./DynamicExchangeRate";

const SocialImpact = () => {
  const handleJoinRevolution = () => {
    window.open("https://wa.me/+59171234567?text=Quiero%20unirme%20a%20la%20revolución%20financiera", "_blank");
  };

  const handleWaitlistClick = () => {
    window.open('https://docs.google.com/forms/d/1-3X9asbS-wWko_AjcWGjnOBR6XmAaq2w6sE53eKu6cc/edit', '_blank');
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Impacto{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Social
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            En Bolivia, la escasez de dólares y la inflación dificultan el acceso a divisas. 
            Zenda usa stablecoins para ofrecer tasas competitivas y empoderar a las familias bolivianas.
          </p>
        </div>

        {/* Stats Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          <Card className="shadow-elegant border-0 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">Mercado Oficial</h3>
              <div className="text-3xl font-bold text-destructive mb-2">6.96 BOB</div>
              <p className="text-muted-foreground">por USD (limitado y difícil acceso)</p>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-0 bg-card/80 backdrop-blur-sm ring-2 ring-secondary/20">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">Con Zenda</h3>
              <DynamicExchangeRate 
                variant="social"
                className="mb-2"
              />
              <p className="text-muted-foreground">por USDT (acceso inmediato 24/7)</p>
            </CardContent>
          </Card>
        </div>

        {/* Impact Statement */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="shadow-elegant border-0 bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-6">
                Empoderando Familias Bolivianas
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Cada remesa a través de Zenda significa más bolivianos en el bolsillo de las familias, 
                gracias al tipo de cambio del mercado paralelo y la eliminación de intermediarios 
                tradicionales costosos.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-secondary mb-2">+87%</div>
                  <div className="text-sm text-muted-foreground">Más bolivianos por remesa</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Disponibilidad completa</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary mb-2">&lt;5min</div>
                  <div className="text-sm text-muted-foreground">Tiempo de entrega</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center mb-4 px-4">
            <Button 
              variant="hero" 
              size="xl"
              onClick={handleJoinRevolution}
              className="font-semibold w-full sm:w-auto"
            >
              Únete a la revolución con Zenda
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleWaitlistClick}
              className="font-semibold bg-gradient-to-r from-secondary/30 to-primary/30 border-secondary/60 text-secondary hover:bg-secondary/40 hover:border-secondary/80 transition-all duration-300 group relative overflow-hidden w-full sm:w-auto shadow-lg"
            >
              <div className="absolute inset-0 bg-secondary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <span className="relative z-10 flex items-center gap-2 justify-center">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                <span className="text-sm sm:text-base font-semibold">Lista de Espera</span>
              </span>
            </Button>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Construyendo el futuro de las remesas en Bolivia
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialImpact;