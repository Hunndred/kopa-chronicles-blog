
import { MessageSquare } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a 
      href="https://chat.whatsapp.com/EXAMPLELINK"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-primary text-white rounded-full p-3 shadow-lg hover:bg-green-700 transition-colors"
      aria-label="Join our WhatsApp group"
    >
      <MessageSquare size={32} />
    </a>
  );
};

export default WhatsAppButton;
