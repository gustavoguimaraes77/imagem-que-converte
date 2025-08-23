import { Card } from "@/components/ui/card";
import { Eye, Zap, TrendingUp, Target } from "lucide-react";

const WhatWeDo = () => {
  const benefits = [
    {
      icon: Eye,
      title: "Cores mais chamativas e apetitosas",
      description: "Realçamos cores para despertar o apetite"
    },
    {
      icon: Target,
      title: "Fotos otimizadas para anúncios e redes sociais",
      description: "Imagens perfeitas para todas as plataformas"
    },
    {
      icon: TrendingUp,
      title: "Maior engajamento e conversão",
      description: "Resultados comprovados em vendas"
    },
    {
      icon: Zap,
      title: "Performance que gera resultados reais",
      description: "Transformação visível no seu negócio"
    }
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            O Que Fazemos
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Na <span className="text-primary font-semibold">Olhar que Vende</span>, transformamos suas imagens em verdadeiras ferramentas de vendas. 
            Ajustamos cores, qualidade, nitidez e criamos composições que despertam desejo no seu cliente. 
            Nossa missão é simples: <span className="text-accent font-semibold">aumentar sua visibilidade e potencializar seus resultados</span> com imagens profissionais.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 hover:shadow-warm transition-all duration-300 hover:transform hover:scale-105 bg-card/80 backdrop-blur-sm">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-gradient-accent rounded-full">
                  <benefit.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;