import { CheckCircle2 } from "lucide-react";

interface SlidePlanHybridProps {
  onSelect?: () => void;
}

export const SlidePlanHybrid = ({ onSelect }: SlidePlanHybridProps) => {
  const idealFor = [
    "Escritórios em crescimento",
    "Quer alinhar interesses com a agência",
    "Confortável com modelo de performance",
  ];

  const advantages = [
    "Mensalidade 16% menor que o fixo",
    "Agência tem incentivo direto no seu resultado",
    "Maior comprometimento com conversão",
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
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-medium">
            EQUILIBRADO
          </span>
        </div>

        {/* Card */}
        <div className="bg-card/50 backdrop-blur-sm border border-accent/30 rounded-2xl p-8 relative overflow-hidden">
          {/* Highlight border */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />

          {/* Price */}
          <div className="text-center mb-6 relative">
            <p className="text-4xl md:text-5xl font-bold text-accent">
              R$ 1.500<span className="text-2xl">/mês</span>
            </p>
            <p className="text-muted-foreground text-lg mt-2">
              + 5% do valor líquido das vendas
            </p>
          </div>

          {/* Description */}
          <p className="text-center text-muted-foreground mb-6 relative">
            Mensalidade reduzida + participação no sucesso.
          </p>

          {/* Ideal For */}
          <div className="mb-4 relative">
            <h4 className="text-sm font-semibold text-foreground mb-3">
              Ideal para:
            </h4>
            <ul className="space-y-2">
              {idealFor.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-muted-foreground text-sm"
                >
                  <span className="text-accent">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Advantages */}
          <div className="mb-4 relative">
            <h4 className="text-sm font-semibold text-foreground mb-3">
              Vantagens:
            </h4>
            <ul className="space-y-2">
              {advantages.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-muted-foreground text-sm"
                >
                  <span className="text-accent">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Included */}
          <div className="mb-8 relative">
            <h4 className="text-sm font-semibold text-foreground mb-3">
              Incluído:
            </h4>
            <ul className="space-y-2">
              {included.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-muted-foreground text-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <button
            onClick={onSelect}
            className="w-full py-4 rounded-lg bg-accent hover:bg-accent/90 
              text-accent-foreground font-semibold transition-all duration-200 hover:scale-[1.02] relative"
          >
            Escolher Plano Híbrido
          </button>
        </div>
      </div>
    </div>
  );
};
