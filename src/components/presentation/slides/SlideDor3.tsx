import { useEffect, useState } from "react";
import { AlertTriangle, HelpCircle, ArrowDown, Tag, Link } from "lucide-react";

interface Props {
  isActive: boolean;
}

const kanbanCols = [
  { title: "Novo Lead", color: "#3B82F6", cards: [
    { name: "Camila R.", tag: "#Novo", product: "Ômega-3" },
    { name: "André S.", tag: "#Novo", product: "Creatina" },
  ]},
  { title: "Qualificando", color: "#F59E0B", cards: [
    { name: "Juliana M.", tag: "#VIP", product: "D3 Ultra" },
  ]},
  { title: "Proposta", color: "#F97316", cards: [
    { name: "Lucas T.", tag: "#Recorrente", product: "Kit Premium" },
  ]},
  { title: "Follow-up", color: "#8B5CF6", cards: [
    { name: "Patricia L.", tag: "#SAC", product: "Vitamina C" },
  ]},
  { title: "Convertido", color: "#10B981", cards: [
    { name: "Rafael D.", tag: "#VIP", product: "Ômega-3 Ultra" },
    { name: "Fernanda C.", tag: "#Novo", product: "D3 Max" },
  ]},
];

export function SlideDor3({ isActive }: Props) {
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
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F97316]/10 border border-[#F97316]/30 mb-6 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <AlertTriangle className="w-4 h-4 text-[#F97316]" />
          <span className="text-sm text-[#F97316]">Gargalo Crítico #3</span>
        </div>

        <h2
          className={`font-display text-3xl md:text-title mb-3 text-[#F1F5F9] transition-all duration-700 ${
            show ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-4"
          }`}
        >
          Seu funil existe. Você só não consegue ver ele.
        </h2>

        <p
          className={`text-[#94A3B8] text-lg mb-8 max-w-3xl transition-all duration-700 ${
            show ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-4"
          }`}
        >
          Leads entram pelo WhatsApp, pelo e-commerce, pelo Edrone — e somem no vácuo sem rastreabilidade
        </p>

        {/* Split: Funnel HOJE vs Kanban AIOS */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Funnel HOJE */}
          <div className="lg:col-span-2 rounded-2xl bg-[#EF4444]/5 border border-[#EF4444]/20 p-6">
            <div className="text-xs uppercase tracking-wider text-[#EF4444] font-semibold mb-6">Funil Atual</div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-full py-3 rounded-lg bg-[#3B82F6]/20 text-center text-sm text-[#F1F5F9] font-medium">
                Lead chega
              </div>
              <ArrowDown className="w-5 h-5 text-[#94A3B8]" />
              <div className="w-4/5 py-3 rounded-lg bg-[#EF4444]/15 text-center text-sm text-[#94A3B8] flex items-center justify-center gap-2">
                <HelpCircle className="w-4 h-4" />
                ??? ninguém sabe
              </div>
              <ArrowDown className="w-5 h-5 text-[#94A3B8]" />
              <div className="w-3/5 py-3 rounded-lg bg-white/5 text-center text-sm text-[#94A3B8]">
                Comprou ou sumiu
              </div>
            </div>
            {/* Dripping animation */}
            <div className="relative h-8 mt-4 overflow-hidden">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full bg-[#EF4444]/40"
                  style={{
                    left: `${30 + i * 20}%`,
                    animation: `drip 2s ease-in infinite`,
                    animationDelay: `${i * 0.6}s`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Kanban AIOS */}
          <div className="lg:col-span-3 rounded-2xl bg-[#00D4AA]/5 border border-[#00D4AA]/20 p-6">
            <div className="text-xs uppercase tracking-wider text-[#00D4AA] font-semibold mb-4">Kanban AIOS CRM</div>
            <div className="grid grid-cols-5 gap-2">
              {kanbanCols.map((col, i) => (
                <div key={i}>
                  <div className="text-[10px] font-semibold mb-2 truncate" style={{ color: col.color }}>
                    {col.title}
                  </div>
                  <div className="space-y-1.5">
                    {col.cards.map((card, j) => (
                      <div key={j} className="bg-white/5 border border-white/10 rounded-md px-2 py-1.5">
                        <div className="text-[10px] text-[#F1F5F9] font-medium truncate">{card.name}</div>
                        <div className="text-[9px] text-[#94A3B8] truncate">{card.product}</div>
                        <span
                          className="inline-block mt-1 text-[8px] px-1.5 py-0.5 rounded-full"
                          style={{
                            backgroundColor: col.color + "20",
                            color: col.color,
                          }}
                        >
                          {card.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 mt-4 text-xs text-[#00D4AA]">
              <Tag className="w-3 h-3" />
              <span>Sincronizado com Edrone</span>
            </div>
          </div>
        </div>

        {/* Impact quote */}
        <div
          className={`text-center glass-card p-6 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0 delay-500" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-lg text-[#F1F5F9] italic">
            "Sem painel, você gerencia pela memória.{" "}
            <span className="text-[#00D4AA] not-italic font-semibold">Com AIOS, você gerencia por dados.</span>"
          </p>
        </div>
      </div>
    </div>
  );
}
