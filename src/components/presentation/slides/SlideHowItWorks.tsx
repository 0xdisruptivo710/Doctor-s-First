import { Target, MessageSquare, Users, Award } from "lucide-react";

export const SlideHowItWorks = () => {
  const steps = [
    {
      icon: Target,
      title: "Anúncio no Meta Ads",
      description: "Lead vê campanha segmentada para sua área jurídica",
    },
    {
      icon: MessageSquare,
      title: "Chatbot Qualifica",
      description: "IA conversa, identifica necessidade e agenda consulta",
    },
    {
      icon: Users,
      title: "CRM Organiza",
      description: "Lead entra no pipeline, time recebe notificação",
    },
    {
      icon: Award,
      title: "Conversão",
      description: "Consulta realizada, caso fechado, receita rastreada",
    },
  ];

  return (
    <div className="flex flex-col gap-8 animate-fade-in">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
          Jornada do lead até o cliente
        </h2>
      </div>

      {/* Flowchart */}
      <div className="flex flex-col gap-4 mt-8 max-w-2xl mx-auto w-full">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="relative">
              <div
                className="bg-gradient-to-r from-card to-secondary border-l-4 border-primary p-6 rounded-lg
                  hover:scale-[1.02] transition-all duration-300 animate-slide-in-right"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </div>
                  <div className="ml-auto text-3xl font-bold text-primary/30">
                    {index + 1}
                  </div>
                </div>
              </div>
              {/* Connector */}
              {index < steps.length - 1 && (
                <div className="absolute left-10 top-full h-4 w-0.5 bg-primary/30" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
