import { Shield, Zap, BarChart3, Users } from "lucide-react";

export const SlideDifferentials = () => {
  const differentials = [
    {
      icon: Shield,
      title: "Gestão de Tráfego Especializada",
      description:
        "Campanhas focadas em conversão, otimização contínua e estratégias personalizadas para seu nicho.",
    },
    {
      icon: Zap,
      title: "Tudo Integrado",
      description:
        "CRM + Chatbot + Ads em uma só plataforma. Sem necessidade de múltiplas ferramentas.",
    },
    {
      icon: BarChart3,
      title: "Resultados Rastreáveis",
      description:
        "Saiba exatamente quanto cada lead custou e quanto cada cliente gerou.",
    },
    {
      icon: Users,
      title: "Time Dedicado",
      description:
        "Suporte contínuo com especialistas em tráfego, automação e estratégia digital.",
    },
  ];

  return (
    <div className="flex flex-col gap-8 animate-fade-in">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
          Por que AIOS é diferente
        </h2>
      </div>

      {/* Grid 2x2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {differentials.map((diff, index) => {
          const Icon = diff.icon;
          return (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 
                hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]
                animate-slide-in-right"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {diff.title}
                  </h3>
                  <p className="text-muted-foreground">{diff.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
