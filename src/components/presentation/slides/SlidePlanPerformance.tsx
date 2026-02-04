import { CheckCircle2, TrendingUp } from "lucide-react";

interface SlidePlanPerformanceProps {
  onSelect?: () => void;
}

export const SlidePlanPerformance = ({ onSelect }: SlidePlanPerformanceProps) => {
  const idealFor = [
    "Escritórios focados em crescimento agressivo",
    "Quer máximo comprometimento da agência",
    "Confiante no potencial de conversão",
  ];

  const advantages = [
    "Mensalidade 44% menor que o fixo",
    "Agência totalmente alinhada com seu sucesso",
    "Investimento inicial reduzido",
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
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 text-sm font-medium">
            <TrendingUp className="w-4 h-4" />
            MÁXIMO RESULTADO
          </span>
        </div>

        {/* Card */}
        <div className="bg-card/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 relative overflow-hidden">
          {/* Highlight border */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent pointer-events-none" />

          {/* Price */}
          <div className="text-center mb-6 relative">
            <p className="text-4xl md:text-5xl font-bold text-purple-400">
              R$ 1.000<span className="text-2xl">/mês</span>
            </p>
            <p className="text-muted-foreground text-lg mt-2">
              + 10% do valor líquido das vendas
            </p>
          </div>

          {/* Description */}
          <p className="text-center text-muted-foreground mb-6 relative">
            Menor mensalidade + máxima participação nos resultados.
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
                  <span className="text-purple-400">•</span>
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
                  <span className="text-purple-400">✓</span>
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
                  <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <button
            onClick={onSelect}
            className="w-full py-4 rounded-lg bg-purple-500 hover:bg-purple-500/90 
              text-foreground font-semibold transition-all duration-200 hover:scale-[1.02] relative"
          >
            Escolher Plano Performance
          </button>
        </div>
      </div>
    </div>
  );
};
