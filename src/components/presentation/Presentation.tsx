import { useState, useEffect, useCallback } from "react";
import { SlideWrapper } from "./SlideWrapper";
import { SlideNavigation } from "./SlideNavigation";
import { SlideCover } from "./slides/SlideCover";
import { SlideProblem } from "./slides/SlideProblem";
import { SlideSolution } from "./slides/SlideSolution";
import { SlideHowItWorks } from "./slides/SlideHowItWorks";
import { SlideDifferentials } from "./slides/SlideDifferentials";
import { SlideTeam } from "./slides/SlideTeam";
import { SlidePlansIntro } from "./slides/SlidePlansIntro";
import { SlidePlanFixed } from "./slides/SlidePlanFixed";
import { SlidePlanHybrid } from "./slides/SlidePlanHybrid";
import { SlidePlanPerformance } from "./slides/SlidePlanPerformance";
import { SlideDeliverables } from "./slides/SlideDeliverables";
import { SlideNextSteps } from "./slides/SlideNextSteps";
import { Monitor } from "lucide-react";

const TOTAL_SLIDES = 12;
const MIN_WIDTH = 768;

export const Presentation = () => {
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

  return (
    <div className="h-screen w-screen overflow-hidden bg-background">
      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={TOTAL_SLIDES}
        onPrevious={goToPrevious}
        onNext={goToNext}
      />

      <div className="relative h-full w-full">
        {/* Slide 1 - Cover */}
        <SlideWrapper
          isActive={currentSlide === 0}
          currentSlide={currentSlide}
          totalSlides={TOTAL_SLIDES}
        >
          <SlideCover onNavigateToPlans={() => goToSlide(6)} />
        </SlideWrapper>

        {/* Slide 2 - Problem */}
        <SlideWrapper
          isActive={currentSlide === 1}
          currentSlide={currentSlide}
          totalSlides={TOTAL_SLIDES}
        >
          <SlideProblem />
        </SlideWrapper>

        {/* Slide 3 - Solution */}
        <SlideWrapper
          isActive={currentSlide === 2}
          currentSlide={currentSlide}
          totalSlides={TOTAL_SLIDES}
        >
          <SlideSolution />
        </SlideWrapper>

        {/* Slide 4 - How It Works */}
        <SlideWrapper
          isActive={currentSlide === 3}
          currentSlide={currentSlide}
          totalSlides={TOTAL_SLIDES}
        >
          <SlideHowItWorks />
        </SlideWrapper>

        {/* Slide 5 - Differentials */}
        <SlideWrapper
          isActive={currentSlide === 4}
          currentSlide={currentSlide}
          totalSlides={TOTAL_SLIDES}
        >
          <SlideDifferentials />
        </SlideWrapper>

        {/* Slide 6 - Team */}
        <SlideWrapper
          isActive={currentSlide === 5}
          currentSlide={currentSlide}
          totalSlides={TOTAL_SLIDES}
        >
          <SlideTeam />
        </SlideWrapper>

        {/* Slide 7 - Plans Intro */}
        <SlideWrapper
          isActive={currentSlide === 6}
          currentSlide={currentSlide}
          totalSlides={TOTAL_SLIDES}
        >
          <SlidePlansIntro />
        </SlideWrapper>

        {/* Slide 8 - Plan Fixed */}
        <SlideWrapper
          isActive={currentSlide === 7}
          currentSlide={currentSlide}
          totalSlides={TOTAL_SLIDES}
        >
          <SlidePlanFixed />
        </SlideWrapper>

        {/* Slide 9 - Plan Hybrid */}
        <SlideWrapper
          isActive={currentSlide === 8}
          currentSlide={currentSlide}
          totalSlides={TOTAL_SLIDES}
        >
          <SlidePlanHybrid />
        </SlideWrapper>

        {/* Slide 10 - Plan Performance */}
        <SlideWrapper
          isActive={currentSlide === 9}
          currentSlide={currentSlide}
          totalSlides={TOTAL_SLIDES}
        >
          <SlidePlanPerformance />
        </SlideWrapper>

        {/* Slide 11 - Deliverables */}
        <SlideWrapper
          isActive={currentSlide === 10}
          currentSlide={currentSlide}
          totalSlides={TOTAL_SLIDES}
        >
          <SlideDeliverables />
        </SlideWrapper>

        {/* Slide 12 - Next Steps */}
        <SlideWrapper
          isActive={currentSlide === 11}
          currentSlide={currentSlide}
          totalSlides={TOTAL_SLIDES}
        >
          <SlideNextSteps />
        </SlideWrapper>
      </div>
    </div>
  );
};
