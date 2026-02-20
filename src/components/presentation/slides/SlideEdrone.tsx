import { useEffect, useState } from "react";
import { Radio, ShoppingCart, ArrowRight, Tag, LayoutDashboard, BarChart3 } from "lucide-react";

interface Props {
  isActive: boolean;
}

const features = [
  { icon: ShoppingCart, title: "Captura de dados de compra", desc: "Cada compra realizada no site (VTEX) é registrada pelo Edrone e enviada automaticamente para o AIOS" },
  { icon: Tag, title: "Etiquetação inteligente no AIOS", desc: "Com os dados de compra, o AIOS classifica o cliente: produto comprado, frequência, ticket médio, categoria" },
  { icon: LayoutDashboard, title: "Alimentação do Kanban", desc: "O lead entra no painel Kanban já com contexto: o que comprou, quando comprou, e qual o perfil dele" },
  { icon: BarChart3, title: "Relatórios internos no AIOS", desc: "Todos os dados do Edrone são consolidados nos relatórios do AIOS para visibilidade completa da operação" },
];

const flowSteps = [
  "Cliente compra no site (VTEX)",
  "Edrone captura os dados",
  "Dados enviados para o AIOS",
  "AIOS organiza no Kanban + etiquetas",
  "Relatórios e ações automáticas",
];

export function SlideEdrone({ isActive }: Props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isActive) {
      const t = setTimeout(() => setShow(true), 100);
      return () => clearTimeout(t);
    }
    setShow(false);
  }, [isActive]);

  return (
    <div className="relative w-full h-full flex items-center justify-center px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/30 mb-6 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Radio className="w-4 h-4 text-[#3B82F6]" />
          <span className="text-sm text-[#3B82F6]">Módulo 2 — Integração Edrone</span>
        </div>

        <h2
          className={`font-display text-3xl md:text-title mb-2 text-[#F1F5F9] transition-all duration-700 ${
            show ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-4"
          }`}
        >
          Edrone: a ponte entre o site e o seu CRM
        </h2>

        <p
          className={`text-[#94A3B8] text-lg mb-8 max-w-3xl transition-all duration-700 ${
            show ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-4"
          }`}
        >
          O Edrone funciona como intermediário entre as compras realizadas no e-commerce e o AIOS, enviando os dados para organizarmos no Kanban, etiquetas e relatórios internos
        </p>

        {/* Feature grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-4"
          }`}
        >
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div
                key={i}
                className="glass-card p-5 hover:border-[#3B82F6]/30 transition-colors"
              >
                <Icon className="w-5 h-5 text-[#3B82F6] mb-3" />
                <div className="text-sm font-semibold text-[#F1F5F9] mb-1">{feat.title}</div>
                <div className="text-xs text-[#94A3B8] leading-relaxed">{feat.desc}</div>
              </div>
            );
          })}
        </div>

        {/* Flow timeline */}
        <div
          className={`glass-card p-5 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0 delay-500" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="text-xs uppercase tracking-wider text-[#94A3B8] font-semibold mb-4">
            Fluxo: do site ao painel AIOS
          </div>
          <div className="flex items-center justify-between gap-2 overflow-x-auto pb-2">
            {flowSteps.map((step, i) => (
              <div key={i} className="flex items-center gap-2 shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/30 flex items-center justify-center text-xs text-[#3B82F6] font-bold">
                    {i + 1}
                  </div>
                  <span className="text-xs text-[#F1F5F9] whitespace-nowrap">{step}</span>
                </div>
                {i < flowSteps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-[#3B82F6]/30 shrink-0 mx-1" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
