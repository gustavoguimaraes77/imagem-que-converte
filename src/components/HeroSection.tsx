import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-6xl md:text-8xl font-bold text-primary-foreground mb-4 drop-shadow-lg">
          Olhar que Vende
        </h1>
        
        <p className="text-2xl md:text-3xl text-primary-foreground/90 mb-6 font-light italic">
          "Transformamos sua imagem em desejo"
        </p>
        
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          Melhore a performance do seu negócio com imagens que despertam apetite, desejo e atenção.
        </p>
        
        <Button 
          variant="hero" 
          size="xl"
          className="animate-pulse hover:animate-none"
        >
          Quero Vender Mais
        </Button>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default HeroSection;