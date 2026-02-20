import { useEffect, useState } from "react";
import { CheckCircle, MessageSquare, Bot, LayoutDashboard, Send, Users, BarChart3, ArrowRight } from "lucide-react";

interface Props {
  isActive: boolean;
}

const flowSteps = [
  { icon: MessageSquare, title: "WhatsApp / E-commerce / Redes", desc: "Canais de entrada" },
  { icon: Bot, title: "Agente IA AIOS", desc: "SDR + SAC automatizado" },
  { icon: Send, title: "Edrone", desc: "Dados de compras do site" },
  { icon: LayoutDashboard, title: "Kanban AIOS", desc: "Painel de Leads" },
  { icon: Users, title: "Time Humano", desc: "Só o que importa" },
  { icon: BarChart3, title: "Dashboard", desc: "Visibilidade 360°" },
];

const pillars = [
  { icon: Bot, title: "Inteligência Artificial", desc: "SDR, SAC, etiquetação, triagem" },
  { icon: BarChart3, title: "Visibilidade Total", desc: "Kanban integrado ao Edrone" },
  { icon: Send, title: "Comunicação Precisa", desc: "Disparos segmentados via API oficial" },
];

export function SlideSolucao({ isActive }: Props) {
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
      <div className="absolute top-10 right-10 w-[300px] h-[300px] rounded-full bg-[#00D4AA]/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00D4AA]/10 border border-[#00D4AA]/30 mb-6 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <CheckCircle className="w-4 h-4 text-[#00D4AA]" />
          <span className="text-sm text-[#00D4AA]">A Solução</span>
        </div>

        <h2
          className={`font-display text-3xl md:text-title mb-3 text-[#F1F5F9] transition-all duration-700 ${
            show ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-4"
          }`}
        >
          Um ecossistema integrado, construído para o DNA da Doctor's First
        </h2>

        {/* Flow diagram */}
        <div
          className={`my-10 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex flex-wrap items-center justify-center gap-2">
            {flowSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className="glass-card-strong p-4 text-center min-w-[140px] hover:bg-white/8 transition-all duration-300 group cursor-default"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <Icon className="w-6 h-6 text-[#00D4AA] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-xs font-semibold text-[#F1F5F9] mb-1">{step.title}</div>
                    <div className="text-[10px] text-[#94A3B8]">{step.desc}</div>
                  </div>
                  {i < flowSteps.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-[#00D4AA]/40 shrink-0" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Animated flow line */}
          <div className="relative h-1 max-w-4xl mx-auto mt-4 rounded-full bg-white/5 overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 w-1/3 rounded-full bg-gradient-to-r from-[#00D4AA]/60 to-transparent"
              style={{
                animation: "shimmer 3s linear infinite",
                backgroundSize: "200% 100%",
                background: "linear-gradient(90deg, transparent, rgba(0,212,170,0.4), transparent)",
              }}
            />
          </div>
        </div>

        {/* 3 Pillars */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0 delay-500" : "opacity-0 translate-y-4"
          }`}
        >
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div key={i} className="glass-card p-6 text-center hover:border-[#00D4AA]/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#00D4AA]/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-[#00D4AA]" />
                </div>
                <div className="text-lg font-semibold text-[#F1F5F9] mb-2">{pillar.title}</div>
                <div className="text-sm text-[#94A3B8]">{pillar.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
