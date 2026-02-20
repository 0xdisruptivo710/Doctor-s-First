import { useEffect, useState } from "react";

interface Props {
  isActive: boolean;
}

function Particle({ delay, x, y, size }: { delay: number; x: number; y: number; size: number }) {
  return (
    <div
      className="absolute rounded-full bg-[#00D4AA] animate-float-slow"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        top: `${y}%`,
        opacity: 0.12 + Math.random() * 0.18,
        animationDelay: `${delay}s`,
        animationDuration: `${4 + Math.random() * 4}s`,
      }}
    />
  );
}

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  delay: Math.random() * 3,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 2 + Math.random() * 4,
}));

export function SlideHero({ isActive }: Props) {
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
      {/* Floating particles */}
      {particles.map((p) => (
        <Particle key={p.id} {...p} />
      ))}

      {/* Gradient orbs */}
      <div className="absolute top-20 right-20 w-[400px] h-[400px] rounded-full bg-[#00D4AA]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-[300px] h-[300px] rounded-full bg-[#3B82F6]/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-sm">🩺</span>
          <span className="text-sm text-[#94A3B8]">Proposta Exclusiva — Doctor's First</span>
        </div>

        {/* Title */}
        <h1
          className={`font-display text-4xl md:text-5xl lg:text-[4.5rem] leading-[1.1] mb-6 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-gradient-primary">Sua operação de atendimento</span>
          <br />
          <span className="text-[#F1F5F9]">pode estar custando clientes</span>
          <br />
          <span className="text-[#F1F5F9]">e receita todos os dias</span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-12 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-4"
          }`}
        >
          Identificamos 3 gargalos críticos na operação digital da Doctor's First que estão travando o crescimento
        </p>

        {/* Stats pills */}
        <div
          className={`flex flex-col md:flex-row items-center justify-center gap-4 mb-12 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0 delay-500" : "opacity-0 translate-y-4"
          }`}
        >
          {[
            { color: "#EF4444", label: "Leads sem resposta rápida", desc: "Perda de conversão estimada" },
            { color: "#F59E0B", label: "Disparos manuais e sem segmentação", desc: "Audiência desperdiçada" },
            { color: "#F97316", label: "Funil invisível no Edrone", desc: "Decisões no escuro" },
          ].map((item, i) => (
            <div key={i} className="glass-card px-5 py-4 flex items-center gap-3 min-w-[260px]">
              <div className="w-3 h-3 rounded-full animate-pulse shrink-0" style={{ backgroundColor: item.color }} />
              <div className="text-left">
                <div className="text-xs text-[#94A3B8] uppercase tracking-wider mb-1">{item.label}</div>
                <div className="text-sm font-medium" style={{ color: item.color }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
