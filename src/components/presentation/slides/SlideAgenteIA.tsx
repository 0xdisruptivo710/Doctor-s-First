import { useEffect, useState } from "react";
import { Bot, CheckCircle } from "lucide-react";

interface Props {
  isActive: boolean;
}

const abilities = [
  "Qualifica leads inbound automaticamente",
  "Responde dúvidas técnicas sobre produtos (D3, Ômega, Creatina...)",
  "Identifica tipo do contato: novo lead / cliente recorrente / reclamação / dúvida",
  "Etiqueta a conversa automaticamente: #SAC #Novo #VIP #Devolução",
  "Insere o lead no painel Kanban na etapa correta",
  "Encaminha para humano quando necessário, com resumo do contexto",
  "Funciona 24h por dia, 7 dias por semana",
];

const chatMessages = [
  { from: "client", text: "Olá, comprei o Ômega-3 Ultra há 3 dias e quero saber sobre o prazo de entrega", delay: 800 },
  { from: "ai", text: "Olá! 😊 Localizei seu pedido #4521. Ele está em trânsito e a previsão é amanhã entre 14h-18h. Posso te ajudar com mais alguma coisa?", delay: 2500 },
  { from: "client", text: "Também queria entender a diferença entre o Ultra EPA e o Ultra DHA", delay: 4500 },
  { from: "ai", text: "Ótima pergunta! O Ultra EPA é focado em saúde cardiovascular e ação anti-inflamatória (720mg EPA). Já o Ultra DHA prioriza funções cognitivas e saúde cerebral (500mg DHA). Qual é sua principal necessidade?", delay: 6500 },
];

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-3 py-2">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="w-2 h-2 rounded-full bg-[#94A3B8] typing-dot"
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </div>
  );
}

export function SlideAgenteIA({ isActive }: Props) {
  const [show, setShow] = useState(false);
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    if (isActive) {
      const t = setTimeout(() => setShow(true), 100);
      return () => clearTimeout(t);
    }
    setShow(false);
    setVisibleMessages(0);
    setShowTyping(false);
  }, [isActive]);

  // Animate chat messages
  useEffect(() => {
    if (!isActive) return;
    const timers: ReturnType<typeof setTimeout>[] = [];

    chatMessages.forEach((msg, i) => {
      // Show typing before AI messages
      if (msg.from === "ai") {
        timers.push(setTimeout(() => setShowTyping(true), msg.delay - 1200));
      }
      timers.push(
        setTimeout(() => {
          setShowTyping(false);
          setVisibleMessages(i + 1);
        }, msg.delay)
      );
    });

    return () => timers.forEach(clearTimeout);
  }, [isActive]);

  return (
    <div className="relative w-full h-full flex items-center justify-center px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00D4AA]/10 border border-[#00D4AA]/30 mb-6 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Bot className="w-4 h-4 text-[#00D4AA]" />
          <span className="text-sm text-[#00D4AA]">Módulo 1 — Agente IA</span>
        </div>

        <h2
          className={`font-display text-3xl md:text-title mb-8 text-[#F1F5F9] transition-all duration-700 ${
            show ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-4"
          }`}
        >
          Conheça o Agente SDR da Doctor's First
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left - Agent card */}
          <div
            className={`transition-all duration-700 ${
              show ? "opacity-100 translate-x-0 delay-200" : "opacity-0 -translate-x-6"
            }`}
          >
            {/* Agent avatar */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[#00D4AA]/10 border border-[#00D4AA]/30 flex items-center justify-center glow-emerald">
                <Bot className="w-8 h-8 text-[#00D4AA]" />
              </div>
              <div>
                <div className="text-lg font-semibold text-[#F1F5F9]">Dra. Sofia</div>
                <div className="text-sm text-[#94A3B8]">Agente IA • SDR + SAC</div>
              </div>
            </div>

            {/* Abilities */}
            <div className="space-y-3">
              {abilities.map((ability, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3"
                  style={{
                    opacity: show ? 1 : 0,
                    transform: show ? "translateY(0)" : "translateY(10px)",
                    transition: `all 500ms ease-out ${300 + i * 100}ms`,
                  }}
                >
                  <CheckCircle className="w-4 h-4 text-[#00D4AA] mt-0.5 shrink-0" />
                  <span className="text-sm text-[#94A3B8]">{ability}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Chat simulation */}
          <div
            className={`transition-all duration-700 ${
              show ? "opacity-100 translate-x-0 delay-300" : "opacity-0 translate-x-6"
            }`}
          >
            <div className="glass-card-strong p-4 h-full">
              {/* Chat header */}
              <div className="flex items-center gap-3 pb-3 mb-3 border-b border-white/10">
                <div className="w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center">
                  <span className="text-sm">💬</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-[#F1F5F9]">Doctor's First</div>
                  <div className="text-xs text-[#00D4AA]">Dra. Sofia • Online</div>
                </div>
              </div>

              {/* Messages */}
              <div className="space-y-3 max-h-[320px] overflow-y-auto pr-1">
                {chatMessages.slice(0, visibleMessages).map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.from === "client" ? "justify-end" : "justify-start"}`}
                    style={{
                      animation: "scale-in 0.3s ease-out forwards",
                    }}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                        msg.from === "client"
                          ? "bg-[#00D4AA]/15 text-[#F1F5F9] rounded-br-sm"
                          : "bg-white/5 text-[#94A3B8] rounded-bl-sm border border-white/10"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

                {/* Typing indicator */}
                {showTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white/5 rounded-2xl rounded-bl-sm border border-white/10">
                      <TypingIndicator />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
