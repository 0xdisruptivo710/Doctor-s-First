import { MessageCircle, Calendar, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { useCalculator } from "@/contexts/CalculatorContext";

export const SlideCTA = () => {
  const { annualLoss } = useCalculator();

  const formattedLoss = annualLoss > 0
    ? annualLoss.toLocaleString("pt-BR")
    : "1.536.000";

  const handleWhatsApp = () => {
    window.open("https://wa.me/5515997424782?text=Ol%C3%A1%20Murilo%2C%20gostaria%20de%20dar%20andamento%20no%20meu%20onbording.", "_blank");
  };

  const handleSchedule = () => {
    window.open("https://wa.me/5515997424782?text=Ol%C3%A1%20Murilo%2C%20gostaria%20de%20dar%20andamento%20no%20meu%20onbording.", "_blank");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 h-full animate-fade-in">
      {/* Badge */}
      <div className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-primary/30 to-primary/20 border border-primary/40 shadow-lg">
        <Sparkles className="w-4 h-4 mr-2 text-primary" />
        <span className="text-sm font-semibold text-primary">
          Hora de Decidir
        </span>
      </div>

      {/* Title with calculator value */}
      <h2 className="text-4xl md:text-6xl font-bold text-center tracking-tight">
        <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Cada dia sem agir sao
        </span>
        <br />
        <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
          R$ {formattedLoss}
        </span>
        <br />
        <span className="bg-gradient-to-r from-foreground/70 to-foreground/50 bg-clip-text text-transparent text-2xl md:text-3xl">
          perdidos por ano
        </span>
      </h2>

      {/* Subtitle */}
      <p className="text-lg text-muted-foreground text-center max-w-2xl">
        A transformacao da ALMIG EPIs comeca com uma conversa.
        Vamos entender seu cenario e personalizar a melhor proposta.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        {/* Primary CTA */}
        <MagneticButton
          className="text-lg px-10 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-2xl glow-emerald"
          onClick={handleWhatsApp}
          strength={0.4}
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Falar no WhatsApp Agora
        </MagneticButton>

        {/* Secondary CTA */}
        <MagneticButton
          className="text-lg px-10 py-6 bg-transparent border-2 border-primary/40 hover:border-primary/60 text-primary font-semibold"
          onClick={handleSchedule}
          strength={0.3}
        >
          <Calendar className="w-5 h-5 mr-2" />
          Agendar Reuniao
        </MagneticButton>
      </div>

      {/* Trust note */}
      <p className="text-sm text-muted-foreground text-center max-w-md">
        Resposta em ate{" "}
        <span className="text-primary font-semibold">2 horas uteis</span>.
        <br />
        Sem compromisso. Vamos descobrir juntos qual proposta e perfeita para voce.
      </p>

      {/* Bottom Badge */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground mt-4">
        <Sparkles className="w-4 h-4 text-primary" />
        <span>
          Proposta preparada com carinho pela{" "}
          <span className="text-primary font-semibold">AIOS</span>
        </span>
      </div>
    </div>
  );
};
