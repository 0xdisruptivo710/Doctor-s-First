import { useEffect, useState, useRef, useCallback } from "react";
import { AlertTriangle, Target, Calendar, FolderOpen, Zap } from "lucide-react";

interface Props {
  isActive: boolean;
}

const tableRows = [
  { situation: "Lista única, disparo em massa", impact: "Alta taxa de descadastro" },
  { situation: "Sem segmentação por produto comprado", impact: "Mensagem irrelevante por cliente" },
  { situation: "Sem regra de cadência", impact: "Canibaliza engajamento" },
  { situation: "Disparo manual = depende de pessoa", impact: "Inconsistência" },
];

const features = [
  { icon: Target, title: "Segmentação por tag de produto", desc: "Quem comprou Ômega recebe conteúdo sobre coração" },
  { icon: Calendar, title: "Cronograma automatizado", desc: "Disparos sem intervenção manual" },
  { icon: FolderOpen, title: "Divisão de listas inteligente", desc: "Por ciclo de recompra, ticket, categoria" },
  { icon: Zap, title: "Integração via API oficial Edrone", desc: "Sem limitações de interface" },
];

export function SlideDor2({ isActive }: Props) {
  const [show, setShow] = useState(false);
  const [sliderPos, setSliderPos] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    if (isActive) {
      const t = setTimeout(() => setShow(true), 100);
      return () => clearTimeout(t);
    }
    setShow(false);
  }, [isActive]);

  const handleMove = useCallback((clientX: number) => {
    if (!isDragging.current || !sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(5, Math.min(95, x)));
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const handleTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);
    const handleUp = () => { isDragging.current = false; };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchend", handleUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchend", handleUp);
    };
  }, [handleMove]);

  return (
    <div className="relative w-full h-full flex items-center justify-center px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/30 mb-6 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <AlertTriangle className="w-4 h-4 text-[#F59E0B]" />
          <span className="text-sm text-[#F59E0B]">Gargalo Crítico #2</span>
        </div>

        <h2
          className={`font-display text-3xl md:text-title mb-3 text-[#F1F5F9] transition-all duration-700 ${
            show ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-4"
          }`}
        >
          Você tem uma lista de ouro. Está usando como bronze.
        </h2>

        <p
          className={`text-[#94A3B8] text-lg mb-8 max-w-3xl transition-all duration-700 ${
            show ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-4"
          }`}
        >
          +100 mil clientes no Edrone com segmentação limitada = campanha genérica para audiência premium
        </p>

        {/* Table */}
        <div
          className={`glass-card p-5 mb-6 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="text-xs uppercase tracking-wider text-[#94A3B8] font-semibold mb-4">
            Raio X dos seus disparos hoje
          </div>
          <div className="space-y-3">
            {tableRows.map((row, i) => (
              <div key={i} className="grid grid-cols-2 gap-4 py-2 border-b border-white/5 last:border-0">
                <span className="text-sm text-[#F1F5F9]">{row.situation}</span>
                <span className="text-sm text-[#EF4444]">{row.impact}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Features grid */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0 delay-400" : "opacity-0 translate-y-4"
          }`}
        >
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div key={i} className="glass-card p-4">
                <Icon className="w-5 h-5 text-[#00D4AA] mb-2" />
                <div className="text-sm font-semibold text-[#F1F5F9] mb-1">{feat.title}</div>
                <div className="text-xs text-[#94A3B8]">{feat.desc}</div>
              </div>
            );
          })}
        </div>

        {/* Before/After slider */}
        <div
          ref={sliderRef}
          className={`relative h-36 rounded-xl overflow-hidden cursor-col-resize select-none transition-all duration-700 border border-white/10 ${
            show ? "opacity-100 translate-y-0 delay-500" : "opacity-0 translate-y-4"
          }`}
          onMouseDown={() => { isDragging.current = true; }}
          onTouchStart={() => { isDragging.current = true; }}
        >
          {/* Left panel — Com AIOS */}
          <div
            className="absolute top-0 bottom-0 left-0 bg-[#00D4AA]/10 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-4 whitespace-nowrap">
                <div className="text-sm font-semibold text-[#00D4AA] mb-1">Com AIOS + Edrone</div>
                <div className="text-xs text-[#94A3B8]">Automático, segmentado, com relatório</div>
              </div>
            </div>
          </div>

          {/* Right panel — Sem AIOS */}
          <div
            className="absolute top-0 bottom-0 right-0 bg-[#EF4444]/10 overflow-hidden"
            style={{ width: `${100 - sliderPos}%` }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-4 whitespace-nowrap">
                <div className="text-sm font-semibold text-[#EF4444] mb-1">Sem AIOS</div>
                <div className="text-xs text-[#94A3B8]">Disparos manuais, lista única, sem segmentação</div>
              </div>
            </div>
          </div>

          {/* Handle divider */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-white/50 z-10"
            style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#0A0F1E] border-2 border-white/50 flex items-center justify-center text-sm text-white shadow-lg">
              ⇄
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
