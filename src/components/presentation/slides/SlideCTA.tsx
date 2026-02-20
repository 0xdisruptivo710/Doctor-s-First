import { useEffect, useState } from "react";
import { MessageCircle, Calendar, Clock } from "lucide-react";

interface Props {
  isActive: boolean;
}

export function SlideCTA({ isActive }: Props) {
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
      {/* Gradient orbs */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-[#00D4AA]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-[#3B82F6]/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/30 mb-8 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Clock className="w-4 h-4 text-[#F59E0B]" />
          <span className="text-sm text-[#F59E0B]">Hora de Agir</span>
        </div>

        {/* Title */}
        <h2
          className={`font-display text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.15] mb-6 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-gradient-primary">Cada mês sem sistema é</span>
          <br />
          <span className="text-[#F1F5F9]">um mês de leads perdidos</span>
          <br />
          <span className="text-[#F1F5F9]">sem que você saiba</span>
        </h2>

        <p
          className={`text-lg text-[#94A3B8] max-w-2xl mx-auto mb-12 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-4"
          }`}
        >
          A Doctor's First construiu uma operação de produto impecável. Está na hora da operação de atendimento acompanhar esse nível.
        </p>

        {/* CTA Buttons */}
        <div
          className={`relative flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0 delay-400" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Ping rings behind primary button */}
          <div className="absolute left-1/2 sm:left-[calc(25%+8px)] top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="w-16 h-16 rounded-full border border-[#00D4AA]/20 animate-ping-ring" />
            <div className="absolute inset-0 w-16 h-16 rounded-full border border-[#00D4AA]/10 animate-ping-ring" style={{ animationDelay: "0.5s" }} />
          </div>

          <a
            href="https://wa.me/5548991472830"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 px-8 py-4 bg-[#00D4AA] text-[#0A0F1E] font-bold rounded-xl hover:bg-[#00D4AA]/90 transition-all duration-300 glow-emerald text-lg z-10"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Falar no WhatsApp Agora</span>
          </a>

          <a
            href="https://wa.me/5548991472830"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 px-8 py-4 border-2 border-[#00D4AA]/40 text-[#00D4AA] font-semibold rounded-xl hover:bg-[#00D4AA]/10 transition-all duration-300 text-lg z-10"
          >
            <Calendar className="w-5 h-5" />
            <span>Agendar Reunião</span>
          </a>
        </div>

        <p
          className={`text-sm text-[#94A3B8] mb-16 transition-all duration-700 ${
            show ? "opacity-100 translate-y-0 delay-500" : "opacity-0 translate-y-4"
          }`}
        >
          Resposta em até 2 horas. Sem compromisso.
        </p>

        {/* Footer */}
        <p
          className={`text-xs text-white/30 transition-all duration-700 ${
            show ? "opacity-100 delay-600" : "opacity-0"
          }`}
        >
          Proposta preparada com cuidado pela equipe AIOS CRM
        </p>
      </div>
    </div>
  );
}
