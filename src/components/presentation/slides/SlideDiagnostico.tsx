import { useEffect, useState } from "react";
import { Building2, MapPin, ShoppingCart, Mail, Users, Star, Dna } from "lucide-react";

interface Props {
  isActive: boolean;
}

const profileItems = [
  { icon: Building2, label: "Doctor's First" },
  { icon: MapPin, label: "São José, SC — E-commerce Nacional" },
  { icon: ShoppingCart, label: "VTEX Platform" },
  { icon: Mail, label: "Edrone (automação de marketing)" },
  { icon: Users, label: "+100.000 clientes ativos" },
  { icon: Star, label: "+10.000 avaliações no Reclame Aqui" },
  { icon: Dna, label: "DNA: Ciência + Transparência + Premium" },
];

const tags = ["#Qualidade", "#Ciência", "#Premium", "#100kClientes"];

export function SlideDiagnostico({ isActive }: Props) {
  const [show, setShow] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (isActive) {
      const t = setTimeout(() => setShow(true), 100);
      return () => clearTimeout(t);
    }
    setShow(false);
  }, [isActive]);

  return (
    <div className="relative w-full h-full flex items-center justify-center px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="absolute top-40 left-10 w-[350px] h-[350px] rounded-full bg-[#00D4AA]/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-sm">🔍</span>
          <span className="text-sm text-[#94A3B8]">Análise do Cenário</span>
        </div>

        <h2
          className={`font-display text-3xl md:text-title mb-10 text-[#F1F5F9] transition-all duration-700 ${
            show ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-4"
          }`}
        >
          Entendemos quem vocês são
        </h2>

        {/* 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left - Text */}
          <div
            className={`transition-all duration-700 ${
              show ? "opacity-100 translate-x-0 delay-200" : "opacity-0 -translate-x-6"
            }`}
          >
            <div className="space-y-5 text-[#94A3B8] text-body leading-relaxed">
              <p>
                Vocês não vendem suplemento. Vocês vendem{" "}
                <span className="text-[#00D4AA] font-medium">confiança científica</span>. Cada produto tem fórmula
                aberta, dosagem clara, matéria-prima certificada.
              </p>
              <p>
                O cliente de vocês é exigente. Pesquisa antes de comprar. Tem dúvidas técnicas. E espera uma
                experiência de atendimento à altura do produto.
              </p>
              <p>
                O problema? A{" "}
                <span className="text-[#EF4444] font-medium">operação de atendimento digital ainda não acompanha</span>{" "}
                a ambição da marca.
              </p>
            </div>
          </div>

          {/* Right - Profile card */}
          <div
            className={`transition-all duration-700 ${
              show ? "opacity-100 translate-x-0 delay-300" : "opacity-0 translate-x-6"
            }`}
          >
            <div
              className="glass-card-strong p-6 relative overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              <div className="space-y-4">
                {profileItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-[#00D4AA] shrink-0" />
                      <span className="text-[#F1F5F9] text-sm">{item.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* Hover tags */}
              <div
                className={`absolute inset-0 flex items-center justify-center gap-3 flex-wrap p-6 bg-[#0A0F1E]/80 backdrop-blur-sm transition-all duration-500 ${
                  hovering ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                {tags.map((tag, i) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full border border-[#00D4AA]/40 text-[#00D4AA] text-sm font-medium animate-float"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
