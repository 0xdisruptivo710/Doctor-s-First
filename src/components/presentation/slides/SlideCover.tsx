import {
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

interface SlideCoverProps {
  onNavigateToPlans: () => void;
}

export const SlideCover = ({ onNavigateToPlans }: SlideCoverProps) => {
  const benefits = [
    "CRM personalizado para escritórios jurídicos",
    "Chatbot inteligente para qualificação 24/7",
    "Geração contínua de leads via Meta Ads",
    "Rastreamento completo e dashboards em tempo real",
  ];

  return (
    <div className="flex flex-col items-center text-center gap-8 animate-fade-in">
      {/* Badge */}
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 border border-primary/30">
        <span className="text-sm font-medium text-primary">
          Para: Bianca & Adriana
        </span>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
        AIOS CRM + Meta Ads
      </h1>

      {/* Subtitle */}
      <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
        Sistema Completo de Gestão de Clientes + Geração Contínua de Leads
        Qualificados para Advocacia
      </p>

      {/* Benefits */}
      <ul className="flex flex-col gap-3 text-left max-w-xl">
        {benefits.map((benefit, index) => (
          <li
            key={index}
            className="flex items-center gap-3 text-muted-foreground animate-slide-in-right"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button
        onClick={onNavigateToPlans}
        className="mt-4 inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary hover:bg-primary/90 
          text-primary-foreground text-lg font-semibold transition-all duration-200 
          hover:scale-105 glow-emerald animate-pulse-glow"
      >
        Ver Proposta Completa
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};
