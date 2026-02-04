import { Target, MessageSquare, TrendingUp } from "lucide-react";

export const SlideProblem = () => {
  const problems = [
    {
      icon: Target,
      iconColor: "text-destructive",
      bgColor: "bg-destructive/20",
      title: "Leads desqualificados",
      description:
        "Muito contato, pouca conversão. Tempo perdido com consultas que não fecham.",
    },
    {
      icon: MessageSquare,
      iconColor: "text-yellow-500",
      bgColor: "bg-yellow-500/20",
      title: "Atendimento manual limitado",
      description:
        "Equipe sobrecarregada respondendo perguntas repetitivas 24/7.",
    },
    {
      icon: TrendingUp,
      iconColor: "text-accent",
      bgColor: "bg-accent/20",
      title: "Falta de controle",
      description:
        "Sem visibilidade de funil, métricas ou ROI dos investimentos em marketing.",
    },
  ];

  return (
    <div className="flex flex-col gap-8 animate-fade-in">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
          O desafio de captar clientes qualificados
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Escritórios de advocacia enfrentam dificuldades específicas na geração
          e gestão de leads jurídicos de qualidade.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {problems.map((problem, index) => {
          const Icon = problem.icon;
          return (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 
                hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]
                animate-slide-in-right"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div
                className={`w-12 h-12 rounded-lg ${problem.bgColor} flex items-center justify-center mb-4`}
              >
                <Icon className={`w-6 h-6 ${problem.iconColor}`} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
