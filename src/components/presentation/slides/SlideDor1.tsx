import { useEffect, useState } from "react";
import { AlertTriangle, Bot, User, CheckCircle, Clock, Zap, Shield } from "lucide-react";

interface Props {
  isActive: boolean;
}

const chaosMessages = [
  { text: "Qual a diferença entre o D3 Max e o D3 Ultra?", rotate: -2 },
  { text: "Meu pedido #4521 chegou errado", rotate: 1.5 },
  { text: "Vocês têm Ômega-3 sem sabor?", rotate: -1 },
  { text: "Cadê minha nota fiscal?", rotate: 2.5 },
  { text: "Quero indicar para meu médico, tem laudo?", rotate: -1.5 },
];

const organizedCards = [
  { label: "IA respondeu", icon: Bot, color: "#00D4AA", items: ["Maria S. — Ômega-3", "João P. — D3 Max"] },
  { label: "Encaminhado", icon: User, color: "#3B82F6", items: ["Carlos M. — Devolução"] },
  { label: "Resolvido", icon: CheckCircle, color: "#10B981", items: ["Ana L. — Nota fiscal", "Pedro R. — Rastreio"] },
];

export function SlideDor1({ isActive }: Props) {
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
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EF4444]/10 border border-[#EF4444]/30 mb-6 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <AlertTriangle className="w-4 h-4 text-[#EF4444]" />
          <span className="text-sm text-[#EF4444]">Gargalo Crítico #1</span>
        </div>

        <h2
          className={`font-display text-3xl md:text-title mb-3 text-[#F1F5F9] transition-all duration-700 ${
            show ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-4"
          }`}
        >
          Leads chegando. Ninguém qualificando.
        </h2>

        <p
          className={`text-[#94A3B8] text-lg mb-8 max-w-3xl transition-all duration-700 ${
            show ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-4"
          }`}
        >
          Cada mensagem sem resposta em menos de 5 minutos reduz a chance de conversão em até 80%
        </p>

        {/* Split screen */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-4"
          }`}
        >
          {/* HOJE - Caos */}
          <div className="rounded-2xl bg-[#EF4444]/5 border border-[#EF4444]/20 p-6">
            <div className="text-xs uppercase tracking-wider text-[#EF4444] font-semibold mb-4">
              WhatsApp Doctor's First — sem triagem
            </div>
            <div className="space-y-3">
              {chaosMessages.map((msg, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-[#94A3B8]"
                  style={{
                    transform: `rotate(${msg.rotate}deg)`,
                    opacity: 0.7 + i * 0.06,
                  }}
                >
                  {msg.text}
                </div>
              ))}
            </div>
          </div>

          {/* COM AIOS - Organizado */}
          <div className="rounded-2xl bg-[#00D4AA]/5 border border-[#00D4AA]/20 p-6">
            <div className="text-xs uppercase tracking-wider text-[#00D4AA] font-semibold mb-4">
              AIOS CRM + Agente SDR
            </div>
            <div className="grid grid-cols-3 gap-3">
              {organizedCards.map((col, i) => {
                const Icon = col.icon;
                return (
                  <div key={i}>
                    <div className="flex items-center gap-1.5 mb-3">
                      <Icon className="w-4 h-4" style={{ color: col.color }} />
                      <span className="text-xs font-medium" style={{ color: col.color }}>
                        {col.label}
                      </span>
                    </div>
                    <div className="space-y-2">
                      {col.items.map((item, j) => (
                        <div
                          key={j}
                          className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-[#F1F5F9]"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-3 gap-4 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0 delay-500" : "opacity-0 translate-y-4"
          }`}
        >
          {[
            { icon: Clock, value: "< 30s", label: "Tempo médio de 1ª resposta com IA" },
            { icon: Zap, value: "70%", label: "Leads resolvidos sem intervenção humana" },
            { icon: Shield, value: "24/7", label: "Atendimento ininterrupto" },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="glass-card p-4 text-center">
                <Icon className="w-5 h-5 text-[#00D4AA] mx-auto mb-2" />
                <div className="font-display text-2xl font-bold text-[#00D4AA] mb-1">{stat.value}</div>
                <div className="text-xs text-[#94A3B8]">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
