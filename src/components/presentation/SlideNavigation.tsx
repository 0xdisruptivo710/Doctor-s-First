import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
}

export const SlideNavigation = ({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
}: SlideNavigationProps) => {
  return (
    <>
      {/* Previous Button */}
      <button
        onClick={onPrevious}
        disabled={currentSlide === 0}
        className={`fixed left-4 md:left-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full 
          bg-primary/20 backdrop-blur-sm border border-primary/30 shadow-lg 
          hover:bg-primary/30 hover:scale-110 transition-all duration-200
          flex items-center justify-center
          disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-primary/20`}
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6 text-primary" />
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className={`fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full 
          bg-primary/20 backdrop-blur-sm border border-primary/30 shadow-lg 
          hover:bg-primary/30 hover:scale-110 transition-all duration-200
          flex items-center justify-center
          disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-primary/20`}
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-6 h-6 text-primary" />
      </button>

      {/* Slide Indicators */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (index < currentSlide) {
                for (let i = 0; i < currentSlide - index; i++) onPrevious();
              } else {
                for (let i = 0; i < index - currentSlide; i++) onNext();
              }
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-primary w-6"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
};
