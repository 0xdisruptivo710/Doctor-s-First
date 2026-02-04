interface SlideHeaderProps {
  currentSlide: number;
  totalSlides: number;
}

export const SlideHeader = ({ currentSlide, totalSlides }: SlideHeaderProps) => {
  return (
    <header className="flex items-center justify-between px-6 md:px-10 py-4 relative z-10">
      <div className="text-2xl font-bold text-primary tracking-tight">
        AIOS
      </div>
      <div className="text-xs md:text-sm text-muted-foreground">
        {currentSlide + 1}/{totalSlides}
      </div>
    </header>
  );
};
