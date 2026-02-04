import { ReactNode } from "react";
import { SlideHeader } from "./SlideHeader";
import { SlideFooter } from "./SlideFooter";

interface SlideWrapperProps {
  children: ReactNode;
  isActive: boolean;
  currentSlide: number;
  totalSlides: number;
}

export const SlideWrapper = ({
  children,
  isActive,
  currentSlide,
  totalSlides,
}: SlideWrapperProps) => {
  return (
    <div
      className={`absolute inset-0 transition-all duration-500 ease-out ${
        isActive
          ? "opacity-100 translate-x-0 pointer-events-auto"
          : "opacity-0 translate-x-8 pointer-events-none"
      }`}
    >
      <div className="relative w-full h-full flex flex-col bg-background overflow-hidden">
        {/* Decorative Gradients */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-accent/10 to-transparent rounded-tr-full pointer-events-none" />

        <SlideHeader currentSlide={currentSlide} totalSlides={totalSlides} />

        <main className="flex-1 px-8 md:px-16 lg:px-20 pb-4 relative z-10 overflow-y-auto">
          <div className="max-w-6xl mx-auto h-full flex flex-col justify-center py-8">
            {children}
          </div>
        </main>

        <SlideFooter />
      </div>
    </div>
  );
};
