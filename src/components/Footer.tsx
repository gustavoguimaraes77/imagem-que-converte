import { Instagram, Facebook, Linkedin, Mail, Phone } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 text-secondary">
              Olhar que Vende
            </h3>
            <p className="text-background/80 mb-6 leading-relaxed">
              Transformamos suas imagens em ferramentas de vendas irresistíveis. 
              Cada detalhe é pensado para que sua marca seja vista e lembrada.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/70 hover:text-secondary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-background/70 hover:text-secondary transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-background/70 hover:text-secondary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-secondary">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#servicos" className="text-background/80 hover:text-secondary transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-background/80 hover:text-secondary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-background/80 hover:text-secondary transition-colors">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#contato" className="text-background/80 hover:text-secondary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-secondary">
              Contato
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span className="text-background/80">olharquevendecontato@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-background/80">(11) 95382-8179 / (11) 94372-4550</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60">
            © {currentYear} Olhar que Vende. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;
