import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Minhas vendas aumentaram em apenas 2 semanas depois que comecei a usar as imagens deles.",
      author: "Ana Silva",
      business: "Restaurante da Ana"
    },
    {
      text: "Agora meus anúncios no iFood e Instagram têm muito mais cliques. Recomendo!",
      author: "Carlos Santos",
      business: "Burguer King Carlos"
    },
    {
      text: "Profissionalismo e resultado, foi o que encontrei na Olhar que Vende.",
      author: "Maria Oliveira",
      business: "Doces da Maria"
    }
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-muted-foreground">
            Resultados reais de quem confia no nosso trabalho
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover:shadow-warm transition-all duration-300 hover:transform hover:scale-105 bg-card/90 backdrop-blur-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              
              <blockquote className="text-card-foreground mb-6 text-lg italic leading-relaxed">
                "{testimonial.text}"
              </blockquote>
              
              <div className="border-t pt-4">
                <p className="font-semibold text-card-foreground">
                  {testimonial.author}
                </p>
                <p className="text-muted-foreground text-sm">
                  {testimonial.business}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;