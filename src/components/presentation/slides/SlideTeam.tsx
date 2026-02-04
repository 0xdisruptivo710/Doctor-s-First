import { TrendingUp, Users, Shield } from "lucide-react";

export const SlideTeam = () => {
  const team = [
    {
      icon: TrendingUp,
      name: "Murilo",
      role: "Gestor de Tráfego e Automações",
      description: "Especialista em Meta Ads e fluxos de automação",
    },
    {
      icon: Users,
      name: "Felipe",
      role: "Estrategista Digital",
      description: "Cuida da estratégia de conversão e funil",
    },
    {
      icon: Shield,
      name: "Sueli",
      role: "Suporte da Plataforma",
      description: "Garante que tudo funcione perfeitamente",
    },
  ];

  return (
    <div className="flex flex-col gap-8 animate-fade-in">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
          Quem vai cuidar do seu crescimento
        </h2>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {team.map((member, index) => {
          const Icon = member.icon;
          return (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 
                hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]
                text-center animate-slide-in-right"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-primary font-medium mb-2">
                {member.role}
              </p>
              <p className="text-muted-foreground text-sm">
                {member.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
