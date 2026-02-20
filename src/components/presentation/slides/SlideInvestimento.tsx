import { useEffect, useState } from "react";
import { DollarSign, Trophy, Check } from "lucide-react";

interface Props {
  isActive: boolean;
}

const features = [
  "Agente IA SDR + SAC 24/7",
  "Painel Kanban completo integrado",
  "Integração Edrone — dados de compras do site",
  "Etiquetação automática de leads",
  "Cronograma de disparos automatizados",
  "Organização diária pelo Agente IA",
  "Dashboard com relatórios internos",
  "Onboarding + treinamento da equipe",
  "Suporte dedicado",
];

export function SlideInvestimento({ isActive }: Props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isActive) {
      const t = setTimeout(() => setShow(true), 100);
      return () => clearTimeout(t);
    }
    setShow(false);
  }, [isActive]);

  return (
    <div className="relative w-full h-full flex items-center justify-center px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="absolute top-20 right-20 w-[350px] h-[350px] rounded-full bg-[#00D4AA]/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto w-full">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00D4AA]/10 border border-[#00D4AA]/30 mb-6 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <DollarSign className="w-4 h-4 text-[#00D4AA]" />
          <span className="text-sm text-[#00D4AA]">Investimento</span>
        </div>

        <h2
          className={`font-display text-3xl md:text-title mb-10 text-[#F1F5F9] transition-all duration-700 ${
            show ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-4"
          }`}
        >
          Investimento para a Doctor's First
        </h2>

        {/* Single plan card */}
        <div
          className={`glass-card-strong p-8 glow-emerald transition-all duration-700 ${
            show ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-5 text-xs font-semibold bg-[#00D4AA]/15 text-[#00D4AA] border border-[#00D4AA]/40">
            <Trophy className="w-3 h-3" />
            <span>Ecossistema Completo</span>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-8">
            {features.map((feat, i) => (
              <div key={i} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#00D4AA] mt-0.5 shrink-0" />
                <span className="text-sm text-[#94A3B8]">{feat}</span>
              </div>
            ))}
          </div>

          {/* Pricing */}
          <div className="border-t border-white/10 pt-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center glass-card p-5 rounded-xl">
                <div className="text-xs text-[#94A3B8] uppercase tracking-wider mb-2">Implementação</div>
                <div className="font-display text-3xl font-bold text-[#F1F5F9]">R$ 15.000</div>
                <div className="text-xs text-[#94A3B8] mt-1">pagamento único</div>
              </div>
              <div className="text-center glass-card p-5 rounded-xl">
                <div className="text-xs text-[#94A3B8] uppercase tracking-wider mb-2">Mensalidade</div>
                <div className="font-display text-3xl font-bold text-[#00D4AA]">R$ 2.600</div>
                <div className="text-xs text-[#94A3B8] mt-1">por mês</div>
              </div>
            </div>
          </div>
        </div>

        {/* Note */}
        <p
          className={`text-center text-sm text-[#94A3B8] mt-6 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0 delay-500" : "opacity-0 translate-y-4"
          }`}
        >
          Inclui onboarding, treinamento da equipe e suporte dedicado.
        </p>
      </div>
    </div>
  );
}
