import { Shield, Zap, Target } from "lucide-react";

export const SlideSolution = () => {
  const solutions = [
    {
      icon: Shield,
      iconColor: "text-primary",
      bgColor: "bg-primary/20",
      title: "CRM Jurídico",
      features: [
        "Gestão completa de clientes e casos",
        "Pipeline de vendas personalizado",
        "Histórico unificado de interações",
        "Automação de follow-ups",
      ],
    },
    {
      icon: Zap,
      iconColor: "text-accent",
      bgColor: "bg-accent/20",
      title: "Chatbot Inteligente",
      features: [
        "Atendimento 24/7 via WhatsApp",
        "Qualificação automática de leads",
        "Respostas baseadas em IA",
        "Agendamento de consultas",
      ],
    },
    {
      icon: Target,
      iconColor: "text-purple-500",
      bgColor: "bg-purple-500/20",
      title: "Meta Ads Profissional",
      features: [
        "Campanhas otimizadas para advocacia",
        "Segmentação por área de atuação",
        "Rastreamento pixel completo",
        "Dashboards em tempo real",
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-8 animate-fade-in">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
          A solução completa que você precisa
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          AIOS CRM integra três pilares fundamentais em uma única plataforma.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {solutions.map((solution, index) => {
          const Icon = solution.icon;
          return (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 
                hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]
                animate-slide-in-right"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div
                className={`w-12 h-12 rounded-lg ${solution.bgColor} flex items-center justify-center mb-4`}
              >
                <Icon className={`w-6 h-6 ${solution.iconColor}`} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {solution.title}
              </h3>
              <ul className="space-y-2">
                {solution.features.map((feature, i) => (
                  <li
                    key={i}
                    className="text-muted-foreground text-sm flex items-start gap-2"
                  >
                    <span className="text-primary mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};
