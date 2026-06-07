import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid place-items-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 transition-transform"
      style={{ animation: "float 3s ease-in-out infinite" }}
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <MessageCircle className="h-7 w-7 relative" />
    </a>
  );
}
