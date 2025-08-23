import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
const FinalCTA = () => {
  return <section id="final-cta" className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <Sparkles className="w-16 h-16 text-primary-foreground animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Está pronto para transformar suas vendas?
          </h2>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            Transforme suas imagens em <span className="font-bold">ferramentas de vendas irresistíveis</span> que despertam desejo e geram resultados reais.
          </p>
          
          <Button 
            variant="cta" 
            size="xl" 
            className="group shadow-2xl"
            onClick={() => window.open('https://wa.me/5511953828179?text=Olá!%20Achei%20interessante%20e%20quero%20alavancar%20minhas%20vendas!', '_blank')}
          >
            Quero minhas imagens agora
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <p className="text-primary-foreground/70 mt-6 text-sm">✨ Resultados garantidos em até 4 horas!</p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg animate-pulse delay-500"></div>
    </section>;
};
export default FinalCTA;