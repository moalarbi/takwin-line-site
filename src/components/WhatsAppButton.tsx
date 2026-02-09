import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { buildGeneralWhatsAppUrl } from '@/utils/whatsapp';

export function WhatsAppButton() {
  const { language } = useLanguage();

  const handleClick = () => {
    const url = buildGeneralWhatsAppUrl(language);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-teal-500 hover:bg-teal-600 text-white rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110 animate-pulse-soft"
      aria-label="WhatsApp"
      style={{
        boxShadow: '0 8px 32px rgba(20, 184, 166, 0.4)',
      }}
    >
      <MessageCircle className="w-7 h-7" />
      
      {/* Pulse Ring */}
      <span className="absolute inset-0 rounded-full bg-teal-500 animate-ping opacity-20" />
    </button>
  );
}
