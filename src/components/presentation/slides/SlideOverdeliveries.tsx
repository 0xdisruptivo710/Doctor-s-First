import { useEffect, useState } from "react";
import { Gift, Bot, Calendar } from "lucide-react";

interface Props {
  isActive: boolean;
}

export function SlideOverdeliveries({ isActive }: Props) {
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
      <div className="absolute top-20 left-20 w-[300px] h-[300px] rounded-full bg-[#F59E0B]/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/30 mb-6 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Gift className="w-4 h-4 text-[#F59E0B]" />
          <span className="text-sm text-[#F59E0B]">Bônus Exclusivos</span>
        </div>

        <h2
          className={`font-display text-3xl md:text-title mb-3 text-[#F1F5F9] transition-all duration-700 ${
            show ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-4"
          }`}
        >
          O que mais vem junto — sem custo adicional
        </h2>

        <p
          className={`text-[#94A3B8] text-lg mb-10 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-4"
          }`}
        >
          Dois overdeliveries que nenhum concorrente oferece
        </p>

        {/* 2 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div
            className={`relative glass-card-strong p-6 overflow-hidden transition-all duration-700 ${
              show ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-6"
            }`}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 animate-shimmer-gold pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#00D4AA]/10 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-[#00D4AA]" />
                </div>
                <div className="text-lg font-semibold text-[#F1F5F9]">
                  Organização Diária pelo Agente IA
                </div>
              </div>

              <div className="space-y-3 mb-5">
                {[
                  "Move leads esquecidos para revisão",
                  "Arquiva leads mortos (sem interação > X dias)",
                  "Sugere próxima ação para cada lead ativo",
                  "Envia resumo matinal para o gestor via WhatsApp",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-[#94A3B8]">
                    <span className="text-[#00D4AA] mt-0.5">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00D4AA]/10 border border-[#00D4AA]/30">
                <span className="text-xs text-[#00D4AA] font-semibold">
                  INCLUSO na proposta
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className={`relative glass-card-strong p-6 overflow-hidden transition-all duration-700 ${
              show ? "opacity-100 translate-y-0 delay-500" : "opacity-0 translate-y-6"
            }`}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 animate-shimmer-gold pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-[#3B82F6]" />
                </div>
                <div className="text-lg font-semibold text-[#F1F5F9]">
                  Cronograma de Disparos em Massa
                </div>
              </div>

              <div className="space-y-3 mb-5">
                {[
                  "Monte o calendário editorial de disparos do mês",
                  "AIOS executa automaticamente nos horários definidos",
                  "Segmentação dinâmica por comportamento recente",
                  "Relatório automático após cada disparo",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-[#94A3B8]">
                    <span className="text-[#3B82F6] mt-0.5">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00D4AA]/10 border border-[#00D4AA]/30">
                <span className="text-xs text-[#00D4AA] font-semibold">
                  INCLUSO na proposta
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
