import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Monitor } from "lucide-react";
import { SlideHero } from "./slides/SlideHero";
import { SlideDiagnostico } from "./slides/SlideDiagnostico";
import { SlideDor1 } from "./slides/SlideDor1";
import { SlideDor2 } from "./slides/SlideDor2";
import { SlideDor3 } from "./slides/SlideDor3";
import { SlideSolucao } from "./slides/SlideSolucao";
import { SlideAgenteIA } from "./slides/SlideAgenteIA";
import { SlideEdrone } from "./slides/SlideEdrone";
import { SlideKanban } from "./slides/SlideKanban";
import { SlideOverdeliveries } from "./slides/SlideOverdeliveries";
import { SlideResultados } from "./slides/SlideResultados";
import { SlideInvestimento } from "./slides/SlideInvestimento";
import { SlideCTA } from "./slides/SlideCTA";

const TOTAL_SLIDES = 13;
const MIN_WIDTH = 768;

const slideComponents = [
  SlideHero,
  SlideDiagnostico,
  SlideDor1,
  SlideDor2,
  SlideDor3,
  SlideSolucao,
  SlideAgenteIA,
  SlideEdrone,
  SlideKanban,
  SlideOverdeliveries,
  SlideResultados,
  SlideInvestimento,
  SlideCTA,
];

export function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentSlide) return;
      if (index < 0 || index >= TOTAL_SLIDES) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 150);
    },
    [currentSlide, isTransitioning]
  );

  const goNext = useCallback(() => goToSlide(currentSlide + 1), [currentSlide, goToSlide]);
  const goPrev = useCallback(() => goToSlide(currentSlide - 1), [currentSlide, goToSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev]);

  // Mobile block
  if (windowWidth < MIN_WIDTH) {
    return (
      <div className="h-screen w-screen overflow-hidden bg-[#0A0F1E] flex flex-col items-center justify-center px-8 text-center">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#00D4AA]/20 to-transparent rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#3B82F6]/10 to-transparent rounded-tr-full" />
        <div className="relative z-10 flex flex-col items-center gap-6 animate-fade-in">
          <div className="w-20 h-20 rounded-full bg-[#00D4AA]/20 flex items-center justify-center">
            <Monitor className="w-10 h-10 text-[#00D4AA]" />
          </div>
          <h1 className="text-2xl font-bold text-[#F1F5F9]">
            Apresentação disponível apenas para telas maiores
          </h1>
          <p className="text-[#94A3B8] text-lg max-w-sm">
            Para uma melhor experiência acesse essa apresentação via tablet, notebook ou computador.
          </p>
          <div className="mt-4 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
            <p className="text-sm text-[#94A3B8]">
              Largura recomendada: <span className="text-[#00D4AA] font-semibold">768px</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#0A0F1E]">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4">
        <div className="flex items-center gap-3">
          <img
            src="/Logo Aios.png"
            alt="AIOS CRM"
            className="h-8 md:h-10"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
              const next = (e.target as HTMLImageElement).nextElementSibling;
              if (next) (next as HTMLElement).classList.remove("hidden");
            }}
          />
          <span className="hidden font-display font-bold text-lg text-[#00D4AA]">AIOS CRM</span>
        </div>
        <span className="text-xs text-[#94A3B8] font-mono">
          {String(currentSlide + 1).padStart(2, "0")} / {TOTAL_SLIDES}
        </span>
      </header>

      {/* Slides */}
      <div className="relative w-full h-full">
        {slideComponents.map((SlideComponent, index) => {
          const isActive = index === currentSlide;
          const isNear = Math.abs(index - currentSlide) <= 1;

          if (!isNear) return null;

          return (
            <div
              key={index}
              className="absolute inset-0 w-full h-full"
              style={{
                opacity: isActive && !isTransitioning ? 1 : 0,
                transform:
                  isActive && !isTransitioning
                    ? "translateX(0)"
                    : index > currentSlide
                      ? "translateX(30px)"
                      : "translateX(-30px)",
                transition: "opacity 400ms ease-out, transform 400ms ease-out",
                pointerEvents: isActive ? "auto" : "none",
                zIndex: isActive ? 10 : 1,
              }}
            >
              <SlideComponent isActive={isActive} />
            </div>
          );
        })}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goPrev}
        disabled={currentSlide === 0}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-40 p-2 rounded-full glass-card hover:bg-white/10 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed group"
        aria-label="Slide anterior"
        tabIndex={0}
      >
        <ChevronLeft className="w-6 h-6 text-[#94A3B8] group-hover:text-[#00D4AA] transition-colors" />
      </button>

      <button
        onClick={goNext}
        disabled={currentSlide === TOTAL_SLIDES - 1}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-40 p-2 rounded-full glass-card hover:bg-white/10 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed group"
        aria-label="Próximo slide"
        tabIndex={0}
      >
        <ChevronRight className="w-6 h-6 text-[#94A3B8] group-hover:text-[#00D4AA] transition-colors" />
      </button>

      {/* Pagination dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2">
        {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`rounded-full transition-all duration-300 ${
              i === currentSlide
                ? "w-8 h-2 bg-[#00D4AA]"
                : "w-2 h-2 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Ir para slide ${i + 1}`}
            tabIndex={0}
          />
        ))}
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 right-6 z-40">
        <span className="text-[10px] text-white/40">Proposta confidencial — AIOS CRM</span>
      </div>
    </div>
  );
}
