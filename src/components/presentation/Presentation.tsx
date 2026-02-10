import { useState, useEffect, useCallback } from "react";
import { SlideWrapper } from "./SlideWrapper";
import { SlideNavigation } from "./SlideNavigation";
import { SlideHero } from "./slides/SlideHero";
import { SlideCalculator } from "./slides/SlideCalculator";
import { SlidePains } from "./slides/SlidePains";
import { SlideChaos } from "./slides/SlideChaos";
import { SlideProposal1Intro } from "./slides/SlideProposal1Intro";
import { SlideProposal1Details } from "./slides/SlideProposal1Details";
import { SlideProposal2Intro } from "./slides/SlideProposal2Intro";
import { SlideProposal2Details } from "./slides/SlideProposal2Details";
import { SlideProposal3Intro } from "./slides/SlideProposal3Intro";
import { SlideProposal3Details } from "./slides/SlideProposal3Details";
import { SlideComparison } from "./slides/SlideComparison";
import { SlideCTA } from "./slides/SlideCTA";
import { CalculatorProvider } from "@/contexts/CalculatorContext";
import { Monitor } from "lucide-react";

const TOTAL_SLIDES = 12;
const MIN_WIDTH = 768;

const PresentationContent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  // Track window width
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < TOTAL_SLIDES) {
      setCurrentSlide(index);
    }
  }, []);

  const goToPrevious = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  }, [currentSlide]);

  const goToNext = useCallback(() => {
    if (currentSlide < TOTAL_SLIDES - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToPrevious, goToNext]);

  // Mobile block screen
  if (windowWidth < MIN_WIDTH) {
    return (
      <div className="h-screen w-screen overflow-hidden bg-background flex flex-col items-center justify-center px-8 text-center">
        {/* Decorative gradients */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-secondary/10 to-transparent rounded-tr-full" />

        <div className="relative z-10 flex flex-col items-center gap-6 animate-fade-in">
          <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
            <Monitor className="w-10 h-10 text-primary" />
          </div>

          <h1 className="text-2xl font-bold text-foreground">
            Apresentação disponível apenas para telas maiores
          </h1>

          <p className="text-muted-foreground text-lg max-w-sm">
            Para uma melhor experiência acesse essa apresentação via tablet, notebook ou computador.
          </p>

          <div className="mt-4 px-4 py-2 rounded-lg bg-card/50 border border-border">
            <p className="text-sm text-muted-foreground">
              Largura recomendada: <span className="text-primary font-semibold">768px</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  const slides = [
    <SlideHero />,
    <SlideCalculator />,
    <SlidePains />,
    <SlideChaos />,
    <SlideProposal3Intro />,
    <SlideProposal3Details />,
    <SlideProposal2Intro />,
    <SlideProposal2Details />,
    <SlideProposal1Intro />,
    <SlideProposal1Details />,
    <SlideComparison />,
    <SlideCTA />,
  ];

  return (
    <div className="h-screen w-screen overflow-hidden bg-background">
      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={TOTAL_SLIDES}
        onPrevious={goToPrevious}
        onNext={goToNext}
      />

      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <SlideWrapper
            key={index}
            isActive={currentSlide === index}
            currentSlide={currentSlide}
            totalSlides={TOTAL_SLIDES}
          >
            {slide}
          </SlideWrapper>
        ))}
      </div>
    </div>
  );
};

export const Presentation = () => {
  return (
    <CalculatorProvider>
      <PresentationContent />
    </CalculatorProvider>
  );
};
