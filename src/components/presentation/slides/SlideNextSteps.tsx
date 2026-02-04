import { ArrowRight, Clock, Settings, Rocket } from "lucide-react";

export const SlideNextSteps = () => {
  const steps = [
    {
      icon: Clock,
      time: "1-2 dias",
      title: "Reunião de Alinhamento",
      description: "Entendemos seu escritório, áreas de atuação e objetivos",
    },
    {
      icon: Settings,
      time: "5-7 dias",
      title: "Setup Técnico",
      description: "Configuramos CRM, chatbot, Meta Ads e rastreamento",
    },
    {
      icon: Rocket,
      time: "Contínuo",
      title: "Ativação e Otimização",
      description: "Lançamos campanhas e otimizamos resultados constantemente",
    },
  ];

  return (
    <div className="flex flex-col gap-8 animate-fade-in">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
          Vamos começar?
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground">
          3 passos simples para ativar seu AIOS CRM
        </p>
      </div>

      {/* Timeline */}
      <div className="flex flex-col gap-4 mt-8 max-w-2xl mx-auto w-full">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="relative">
              <div
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 
                  hover:border-primary/30 transition-all duration-300 animate-slide-in-right"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-primary bg-primary/20 px-2 py-0.5 rounded">
                        {step.time}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </div>
                  <div className="text-4xl font-bold text-primary/20">
                    {index + 1}
                  </div>
                </div>
              </div>
              {/* Connector */}
              {index < steps.length - 1 && (
                <div className="absolute left-11 top-full h-4 w-0.5 bg-primary/30" />
              )}
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="text-center mt-8">
        <button className="inline-flex items-center gap-3 px-12 py-6 rounded-xl gradient-emerald text-primary-foreground text-xl font-bold transition-all duration-200 hover:scale-105 glow-emerald animate-pulse-glow">
          Agendar Reunião de Alinhamento
          <ArrowRight className="w-6 h-6" />
        </button>
        <p className="text-muted-foreground/60 text-sm mt-4">
          Ou entre em contato: (XX) XXXXX-XXXX
        </p>
      </div>
    </div>
  );
};
