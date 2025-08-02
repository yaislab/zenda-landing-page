import { Clock, DollarSign, Smartphone, Shield, Zap, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ValueProposition = () => {
  const values = [
    {
      icon: Clock,
      title: "Rápida",
      description: "Remesas en minutos, no días, gracias a blockchain (Ethereum/Tron).",
      color: "text-primary",
      accent: "bg-primary/10",
      hoverColor: "group-hover:text-primary"
    },
    {
      icon: DollarSign,
      title: "Económica", 
      description: "Bajas comisiones y tipo de cambio paralelo (~13 BOB/USDT) para maximizar tu dinero.",
      color: "text-secondary",
      accent: "bg-secondary/10",
      hoverColor: "group-hover:text-secondary"
    },
    {
      icon: Smartphone,
      title: "Simple",
      description: "Todo desde WhatsApp, sin apps nuevas ni complicaciones.",
      color: "text-primary",
      accent: "bg-primary/10",
      hoverColor: "group-hover:text-primary"
    },
    {
      icon: Shield,
      title: "Segura",
      description: "Transacciones protegidas por blockchain y cumplimiento KYC/AML.",
      color: "text-secondary",
      accent: "bg-secondary/10",
      hoverColor: "group-hover:text-secondary"
    }
  ];

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-40 h-40 bg-primary/5 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-secondary/5 rounded-full animate-float-reverse"></div>
        <div className="absolute top-1/2 left-10 w-20 h-20 bg-secondary/8 rounded-full animate-spin-slow"></div>
        <div className="absolute top-1/3 right-10 w-16 h-16 bg-primary/8 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-secondary/10 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            ¿Por qué elegir{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient">
              Zenda?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up-delay">
            La forma más inteligente de enviar dinero a Bolivia usando tecnología blockchain
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card 
                key={index} 
                className="group hover:scale-105 border-0 shadow-lg hover:shadow-elegant transition-all duration-500 bg-card/80 backdrop-blur-sm relative overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className={`absolute inset-0 ${value.accent} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}></div>
                
                <CardContent className="p-8 text-center relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${value.accent} relative group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${value.color} group-hover:animate-bounce-slow transition-all duration-300`} />
                    <div className={`absolute inset-0 ${value.accent.replace('/10', '/30')} rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>
                  
                  <h3 className={`font-heading text-xl font-bold mb-4 ${value.hoverColor} transition-colors duration-300`}>
                    {value.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {value.description}
                  </p>
                  
                  {/* Floating accent elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-secondary/40 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced bottom section with animated stats */}
        <div className="mt-16 text-center animate-slide-up-delay-3">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
            <TrendingUp className="w-5 h-5 text-secondary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Más de <span className="text-secondary font-bold">10,000</span> transacciones exitosas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;