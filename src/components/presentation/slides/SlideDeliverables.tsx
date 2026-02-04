import { CheckCircle2 } from "lucide-react";

export const SlideDeliverables = () => {
  const crmFeatures = [
    "CRM configurado para advocacia",
    "Cadastro de clientes e casos",
    "Pipeline de vendas personalizado",
    "Automação de follow-ups",
    "WhatsApp Business integrado",
    "Chatbot com IA para qualificação",
    "Agendamento automático",
  ];

  const adsFeatures = [
    "Criação de campanhas segmentadas",
    "Gestão mensal de anúncios",
    "Otimização contínua de performance",
    "Pixel de rastreamento instalado",
    "Google Analytics configurado",
    "Dashboard de métricas em tempo real",
    "Relatórios mensais de resultados",
  ];

  return (
    <div className="flex flex-col gap-8 animate-fade-in">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
          O que você recebe com AIOS
        </h2>
      </div>

      {/* Grid 2 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* CRM & Automação */}
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/30 transition-all">
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            CRM & Automação
          </h3>
          <ul className="space-y-3">
            {crmFeatures.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-muted-foreground animate-slide-in-right"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Meta Ads & Tracking */}
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-accent/30 transition-all">
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Meta Ads & Tracking
          </h3>
          <ul className="space-y-3">
            {adsFeatures.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-muted-foreground animate-slide-in-right"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
