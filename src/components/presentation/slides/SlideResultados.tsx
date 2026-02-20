import { useEffect, useState, useRef } from "react";
import { TrendingUp, Quote } from "lucide-react";

interface Props {
  isActive: boolean;
}

function AnimatedCounter({ target, prefix, suffix, isActive }: { target: number; prefix?: string; suffix?: string; isActive: boolean }) {
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!isActive || started.current) return;
    started.current = true;
    const duration = 2000;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isActive, target]);

  useEffect(() => {
    if (!isActive) {
      started.current = false;
      setValue(0);
    }
  }, [isActive]);

  return (
    <span className="font-display text-4xl md:text-5xl font-bold text-[#00D4AA]">
      {prefix}{value}{suffix}
    </span>
  );
}

const timeline = [
  { period: "Semana 1-2", desc: "Onboarding, configuração do Agente IA, integração Edrone API" },
  { period: "Semana 3-4", desc: "Treinamento da equipe, primeiros disparos automáticos, kanban ativo" },
  { period: "Mês 2", desc: "Otimização das regras, primeiros relatórios de performance" },
  { period: "Mês 3", desc: "Operação autônoma, expansão de automações conforme necessidade" },
];

export function SlideResultados({ isActive }: Props) {
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
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00D4AA]/10 border border-[#00D4AA]/30 mb-6 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <TrendingUp className="w-4 h-4 text-[#00D4AA]" />
          <span className="text-sm text-[#00D4AA]">Impacto Esperado</span>
        </div>

        <h2
          className={`font-display text-3xl md:text-title mb-10 text-[#F1F5F9] transition-all duration-700 ${
            show ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-4"
          }`}
        >
          O que muda na operação em 60 dias
        </h2>

        {/* Metrics */}
        <div
          className={`grid grid-cols-3 gap-6 mb-10 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="glass-card-strong p-6 text-center">
            <AnimatedCounter target={45} prefix="+" suffix="%" isActive={isActive && show} />
            <div className="text-sm text-[#94A3B8] mt-2">Taxa de resposta no 1° contato</div>
          </div>
          <div className="glass-card-strong p-6 text-center">
            <AnimatedCounter target={80} prefix="-" suffix="%" isActive={isActive && show} />
            <div className="text-sm text-[#94A3B8] mt-2">Tempo gasto com triagem manual</div>
          </div>
          <div className="glass-card-strong p-6 text-center">
            <span className="font-display text-4xl md:text-5xl font-bold text-[#00D4AA]">
              <AnimatedCounter target={3} suffix="x" isActive={isActive && show} />
            </span>
            <div className="text-sm text-[#94A3B8] mt-2">Mais leads organizados e rastreados</div>
          </div>
        </div>

        {/* Timeline */}
        <div
          className={`glass-card p-6 mb-8 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0 delay-400" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="grid grid-cols-4 gap-4">
            {timeline.map((item, i) => (
              <div key={i} className="relative">
                {/* Connector line */}
                {i < timeline.length - 1 && (
                  <div className="absolute top-3 left-[calc(50%+20px)] right-0 h-0.5 bg-gradient-to-r from-[#00D4AA]/30 to-transparent" />
                )}
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#00D4AA]/10 border border-[#00D4AA]/40 flex items-center justify-center text-[10px] text-[#00D4AA] font-bold shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-xs font-semibold text-[#00D4AA]">{item.period}</span>
                </div>
                <p className="text-xs text-[#94A3B8] leading-relaxed pl-8">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div
          className={`glass-card p-6 text-center transition-all duration-700 ${
            show ? "opacity-100 translate-y-0 delay-500" : "opacity-0 translate-y-4"
          }`}
        >
          <Quote className="w-6 h-6 text-[#00D4AA]/40 mx-auto mb-3" />
          <p className="text-[#94A3B8] italic text-sm max-w-xl mx-auto">
            "Estamos preparados para construir esse caso de sucesso com vocês. A Doctor's First tem todos os ingredientes para uma operação de atendimento referência no mercado."
          </p>
          <div className="mt-3 text-xs text-[#00D4AA] font-semibold">Equipe AIOS CRM</div>
        </div>
      </div>
    </div>
  );
}
