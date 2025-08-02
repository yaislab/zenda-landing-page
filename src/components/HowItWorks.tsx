import { MessageSquare, DollarSign, CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageSquare,
      step: "1",
      title: "Escribe 'enviar'",
      description: "Contacta nuestro chatbot de WhatsApp y escribe 'enviar' para comenzar.",
      detail: "Sin registros complicados, solo abre WhatsApp"
    },
    {
      icon: DollarSign,
      step: "2", 
      title: "Indica monto y destino",
      description: "Especifica el monto en USDT y los datos del destinatario en Bolivia.",
      detail: "Proceso guiado paso a paso por el chatbot"
    },
    {
      icon: CheckCircle,
      step: "3",
      title: "Confirma y listo",
      description: "Confirma la transacción y el dinero llega en minutos, convertido a bolivianos.",
      detail: "Recibe confirmación inmediata y seguimiento"
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/5 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary/5 rounded-full animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary/10 rounded-full animate-spin-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-primary/8 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            ¿Cómo{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient">
              funciona?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up-delay">
            Tres simples pasos para enviar dinero a Bolivia de forma segura y rápida
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <Card className="group hover:scale-105 border-0 shadow-lg hover:shadow-elegant transition-all duration-500 bg-card/80 backdrop-blur-sm relative overflow-visible h-full">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-secondary/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                  
                  {/* Step Number - Fixed positioning */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg shadow-lg animate-count-up group-hover:animate-money-bounce">
                      {step.step}
                    </div>
                  </div>
                  
                  <CardContent className="p-8 text-center relative z-10 h-full flex flex-col pt-12">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 bg-secondary/10 group-hover:bg-secondary/20 transition-all duration-300 relative">
                      <IconComponent className="w-8 h-8 text-secondary group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-secondary/20 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="font-heading text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed group-hover:text-foreground transition-colors duration-300 flex-grow">
                      {step.description}
                    </p>
                    <p className="text-sm text-primary font-medium group-hover:text-secondary transition-colors duration-300">
                      {step.detail}
                    </p>
                  </CardContent>
                </Card>
                
                {/* Enhanced Arrow connector */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center animate-pulse group-hover:animate-bounce shadow-lg">
                      <ArrowRight className="w-5 h-5 text-primary animate-slide-right" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Enhanced WhatsApp Mockup */}
        <div className="max-w-md mx-auto animate-slide-up-delay-3">
          <div className="bg-card rounded-3xl shadow-elegant p-6 border relative overflow-hidden group hover:scale-105 transition-transform duration-500">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="bg-muted/50 rounded-2xl p-4 mb-4 relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center relative">
                  <MessageSquare className="w-5 h-5 text-secondary-foreground animate-bounce-slow" />
                  <div className="absolute inset-0 bg-secondary/30 rounded-full animate-ping"></div>
                </div>
                <div>
                  <div className="font-semibold text-sm">Zenda Bot</div>
                  <div className="text-xs text-muted-foreground flex items-center gap-1">
                    <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                    En línea
                  </div>
                </div>
              </div>
              
              {/* Enhanced Chat messages */}
              <div className="space-y-3">
                <div className="bg-white rounded-2xl rounded-bl-md p-3 max-w-[80%] animate-slide-up" style={{ animationDelay: '0.5s' }}>
                  <p className="text-sm">¡Hola! Soy Zenda Bot. Escribe 'enviar' para comenzar una remesa a Bolivia 🇧🇴</p>
                </div>
                <div className="bg-primary text-primary-foreground rounded-2xl rounded-br-md p-3 max-w-[80%] ml-auto animate-slide-up" style={{ animationDelay: '1s' }}>
                  <p className="text-sm">enviar</p>
                </div>
                <div className="bg-white rounded-2xl rounded-bl-md p-3 max-w-[80%] animate-slide-up" style={{ animationDelay: '1.5s' }}>
                  <p className="text-sm">Perfecto! ¿Cuánto quieres enviar en USDT?</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements around the mockup */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-secondary/30 rounded-full animate-float-slow"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-primary/30 rounded-full animate-float-reverse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;