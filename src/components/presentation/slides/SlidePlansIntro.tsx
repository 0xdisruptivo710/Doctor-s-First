import { CheckCircle2, Lightbulb } from "lucide-react";

export const SlidePlansIntro = () => {
  const includedFeatures = [
    "Setup completo do CRM",
    "Configuração do chatbot no WhatsApp",
    "Criação e gestão de campanhas Meta Ads",
    "Rastreamento de leads (Pixel + Analytics)",
    "Dashboards personalizados",
    "Suporte contínuo do time",
  ];

  return (
    <div className="flex flex-col gap-8 animate-fade-in">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
          Escolha o modelo ideal para seu escritório
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          3 opções de investimento com diferentes estruturas de risco e retorno
        </p>
      </div>

      {/* Important Notice */}
      <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 mt-4">
        <div className="flex items-start gap-4">
          <Lightbulb className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-foreground font-medium">Importante:</p>
            <p className="text-muted-foreground">
              Investimento em anúncios (Meta Ads) fica por conta do escritório.
              Você controla o orçamento.
            </p>
          </div>
        </div>
      </div>

      {/* Included Features */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
          O que está incluído em todos os planos:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto">
          {includedFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 animate-slide-in-right"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
