import { CheckCircle2 } from "lucide-react";

interface SlidePlanFixedProps {
  onSelect?: () => void;
}

export const SlidePlanFixed = ({ onSelect }: SlidePlanFixedProps) => {
  const idealFor = [
    "Escritórios que preferem previsibilidade total",
    "Controle orçamentário rigoroso",
    "Não querem compartilhar dados de faturamento",
  ];

  const included = [
    "Tudo do AIOS CRM",
    "Gestão completa de Meta Ads",
    "Chatbot WhatsApp ilimitado",
    "Dashboards e relatórios",
    "Suporte prioritário",
  ];

  return (
    <div className="flex flex-col gap-8 animate-fade-in">
      <div className="max-w-xl mx-auto w-full">
        {/* Badge */}
        <div className="text-center mb-6">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-medium">
            MAIS PREVISÍVEL
          </span>
        </div>

        {/* Card */}
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/30 transition-all">
          {/* Price */}
          <div className="text-center mb-6">
            <p className="text-5xl md:text-6xl font-bold text-primary">
              R$ 1.800
            </p>
            <p className="text-muted-foreground text-lg">/mês</p>
          </div>

          {/* Description */}
          <p className="text-center text-muted-foreground mb-6">
            Mensalidade fixa, sem variação por performance.
          </p>

          {/* Ideal For */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-foreground mb-3">
              Ideal para:
            </h4>
            <ul className="space-y-2">
              {idealFor.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-muted-foreground text-sm"
                >
                  <span className="text-primary">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Included */}
          <div className="mb-8">
            <h4 className="text-sm font-semibold text-foreground mb-3">
              Incluído:
            </h4>
            <ul className="space-y-2">
              {included.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-muted-foreground text-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <button
            onClick={onSelect}
            className="w-full py-4 rounded-lg bg-primary hover:bg-primary/90 
              text-primary-foreground font-semibold transition-all duration-200 hover:scale-[1.02]"
          >
            Escolher Plano Fixo
          </button>
        </div>
      </div>
    </div>
  );
};
