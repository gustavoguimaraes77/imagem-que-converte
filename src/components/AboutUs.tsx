import { Card } from "@/components/ui/card";
import { Calendar, Users, Target, Award } from "lucide-react";

const AboutUs = () => {
  const stats = [
    {
      icon: Calendar,
      value: "2024",
      label: "Fundada em"
    },
    {
      icon: Users,
      value: "500+",
      label: "Clientes satisfeitos"
    },
    {
      icon: Target,
      value: "90%",
      label: "Aumento médio em vendas"
    },
    {
      icon: Award,
      value: "100%",
      label: "Satisfação garantida"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Sobre Nós
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
            Somos uma <span className="text-primary font-semibold">agência especializada em design e social media</span>, fundada em 2024. 
            Desde o início, temos como propósito trazer <span className="text-accent font-semibold">inovação e crescimento</span> para negócios de todos os portes 
            através da imagem perfeita. Cada detalhe é pensado para que a sua marca não só seja vista, mas <span className="text-primary font-semibold">lembrada</span>.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-warm transition-all duration-300 hover:transform hover:scale-105">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-accent rounded-full mb-4">
                  <stat.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
          
          <div className="bg-gradient-accent p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-accent-foreground mb-4">
              Nossa Missão
            </h3>
            <p className="text-accent-foreground/90 text-lg leading-relaxed">
              Transformar cada imagem em uma poderosa ferramenta de vendas, 
              conectando marcas aos seus clientes através do visual irresistível.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;