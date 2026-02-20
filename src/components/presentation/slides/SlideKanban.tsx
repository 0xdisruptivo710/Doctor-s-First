import { useEffect, useState } from "react";
import { LayoutDashboard, MessageSquare, Mail, ShoppingCart, Link } from "lucide-react";

interface Props {
  isActive: boolean;
}

interface LeadCard {
  name: string;
  product: string;
  tag: string;
  tagColor: string;
  origin: "whatsapp" | "email" | "ecommerce";
  time: string;
  history?: string;
  nextAction?: string;
}

const originIcons = {
  whatsapp: MessageSquare,
  email: Mail,
  ecommerce: ShoppingCart,
};

const columns: { title: string; emoji: string; color: string; count: number; cards: LeadCard[] }[] = [
  {
    title: "Novos Leads",
    emoji: "🔵",
    color: "#3B82F6",
    count: 12,
    cards: [
      { name: "Camila R.", product: "Ômega-3 Ultra", tag: "#Novo", tagColor: "#3B82F6", origin: "whatsapp", time: "há 5min", history: "Primeira interação via WhatsApp", nextAction: "IA qualificando..." },
      { name: "André S.", product: "Creatina", tag: "#Novo", tagColor: "#3B82F6", origin: "ecommerce", time: "há 15min", history: "Abandonou carrinho com 2 itens", nextAction: "Enviar lembrete em 2h" },
      { name: "Beatriz M.", product: "Vitamina C", tag: "#Novo", tagColor: "#3B82F6", origin: "email", time: "há 30min" },
    ],
  },
  {
    title: "Em Qualificação",
    emoji: "🟡",
    color: "#F59E0B",
    count: 8,
    cards: [
      { name: "Juliana M.", product: "D3 Ultra", tag: "#VIP", tagColor: "#8B5CF6", origin: "whatsapp", time: "há 1h", history: "Cliente recorrente, 5 compras anteriores", nextAction: "Oferecer kit combo" },
      { name: "Marcos P.", product: "Ômega-3", tag: "#Novo", tagColor: "#3B82F6", origin: "whatsapp", time: "há 2h" },
    ],
  },
  {
    title: "Proposta Enviada",
    emoji: "🟠",
    color: "#F97316",
    count: 5,
    cards: [
      { name: "Lucas T.", product: "Kit Premium", tag: "#Recorrente", tagColor: "#10B981", origin: "email", time: "há 3h", history: "Solicitou orçamento para empresa", nextAction: "Follow-up em 24h" },
    ],
  },
  {
    title: "Convertidos",
    emoji: "🟢",
    color: "#10B981",
    count: 23,
    cards: [
      { name: "Rafael D.", product: "Ômega-3 Ultra", tag: "#VIP", tagColor: "#8B5CF6", origin: "ecommerce", time: "há 1d" },
      { name: "Fernanda C.", product: "D3 Max", tag: "#Novo", tagColor: "#3B82F6", origin: "whatsapp", time: "há 2d" },
    ],
  },
  {
    title: "Pós-venda",
    emoji: "⚪",
    color: "#94A3B8",
    count: 14,
    cards: [
      { name: "Patricia L.", product: "Vitamina C", tag: "#SAC", tagColor: "#EF4444", origin: "whatsapp", time: "há 4h", history: "Dúvida sobre modo de uso", nextAction: "Aguardando retorno" },
    ],
  },
];

export function SlideKanban({ isActive }: Props) {
  const [show, setShow] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    if (isActive) {
      const t = setTimeout(() => setShow(true), 100);
      return () => clearTimeout(t);
    }
    setShow(false);
    setHoveredCard(null);
  }, [isActive]);

  return (
    <div className="relative w-full h-full flex items-center justify-center px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="relative z-10 max-w-[1200px] mx-auto w-full">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00D4AA]/10 border border-[#00D4AA]/30 mb-5 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <LayoutDashboard className="w-4 h-4 text-[#00D4AA]" />
          <span className="text-sm text-[#00D4AA]">Módulo 3 — Painel Kanban</span>
        </div>

        <h2
          className={`font-display text-3xl md:text-title mb-6 text-[#F1F5F9] transition-all duration-700 ${
            show ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-4"
          }`}
        >
          Seu funil. Visível. Em tempo real.
        </h2>

        {/* Kanban Board */}
        <div
          className={`grid grid-cols-5 gap-3 mb-6 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-4"
          }`}
        >
          {columns.map((col, i) => (
            <div key={i} className="glass-card p-3 min-h-[280px]">
              {/* Column header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs">{col.emoji}</span>
                  <span className="text-xs font-semibold text-[#F1F5F9] truncate">{col.title}</span>
                </div>
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: col.color + "20", color: col.color }}
                >
                  {col.count}
                </span>
              </div>

              {/* Cards */}
              <div className="space-y-2">
                {col.cards.map((card, j) => {
                  const OriginIcon = originIcons[card.origin];
                  const cardId = `${i}-${j}`;
                  const isHovered = hoveredCard === cardId;

                  return (
                    <div
                      key={j}
                      className="relative bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 hover:bg-white/8 transition-all cursor-default"
                      onMouseEnter={() => setHoveredCard(cardId)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-medium text-[#F1F5F9] truncate">{card.name}</span>
                        <OriginIcon className="w-3 h-3 text-[#94A3B8] shrink-0" />
                      </div>
                      <div className="text-[10px] text-[#94A3B8] mb-1.5">{card.product}</div>
                      <div className="flex items-center justify-between">
                        <span
                          className="text-[9px] px-1.5 py-0.5 rounded-full"
                          style={{ backgroundColor: card.tagColor + "20", color: card.tagColor }}
                        >
                          {card.tag}
                        </span>
                        <span className="text-[9px] text-[#94A3B8]">{card.time}</span>
                      </div>

                      {/* Hover tooltip */}
                      {isHovered && card.history && (
                        <div className="absolute left-full ml-2 top-0 z-50 w-52 glass-card-strong p-3 text-xs animate-scale-in">
                          <div className="text-[#F1F5F9] font-semibold mb-1">{card.name}</div>
                          <div className="text-[#94A3B8] mb-2">{card.history}</div>
                          {card.nextAction && (
                            <div className="text-[#00D4AA] text-[10px]">
                              → {card.nextAction}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div
          className={`flex items-center justify-center gap-2 text-sm text-[#00D4AA] transition-all duration-700 ${
            show ? "opacity-100 translate-y-0 delay-500" : "opacity-0 translate-y-4"
          }`}
        >
          <Link className="w-4 h-4" />
          <span>Sincronizado com Edrone — qualquer movimentação no kanban pode disparar uma automação</span>
        </div>
      </div>
    </div>
  );
}
