import { useLanguage } from '@/contexts/LanguageContext';
import { buildServiceWhatsAppUrl } from '@/utils/whatsapp';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Phone } from 'lucide-react';
import type { Service } from '@/data/services';

interface ServiceCardProps {
  service: Service;
  compact?: boolean;
}

export function ServiceCard({ service, compact = false }: ServiceCardProps) {
  const { language } = useLanguage();

  const handleBookClick = () => {
    const url = buildServiceWhatsAppUrl(service.id, language);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (compact) {
    return (
      <Card className="group hover:shadow-soft transition-all duration-300 border-slate-200 overflow-hidden">
        <CardContent className="p-5">
          <h3 className="font-bold text-navy-900 mb-2 group-hover:text-teal-600 transition-colors">
            {language === 'ar' ? service.nameAr : service.nameEn}
          </h3>
          <p className="text-slate-500 text-sm line-clamp-2 mb-4">
            {language === 'ar' ? service.descriptionAr : service.descriptionEn}
          </p>
          <Button
            onClick={handleBookClick}
            variant="outline"
            size="sm"
            className="w-full border-teal-500 text-teal-600 hover:bg-teal-50"
          >
            <Phone className="w-4 h-4 mr-2" />
            {language === 'ar' ? 'احجز عبر واتساب' : 'Book via WhatsApp'}
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="group hover:shadow-soft transition-all duration-300 border-slate-200 overflow-hidden h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <h3 className="font-bold text-xl text-navy-900 mb-3 group-hover:text-teal-600 transition-colors">
          {language === 'ar' ? service.nameAr : service.nameEn}
        </h3>
        <p className="text-slate-600 mb-4 leading-relaxed flex-grow">
          {language === 'ar' ? service.descriptionAr : service.descriptionEn}
        </p>
        
        <div className="mb-4">
          <p className="text-sm font-medium text-navy-900 mb-2">
            {language === 'ar' ? 'مناسب لـ:' : 'Suitable for:'}
          </p>
          <ul className="space-y-1">
            {(language === 'ar' ? service.suitableForAr : service.suitableForEn).map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-slate-600">
                <Check className="w-4 h-4 text-teal-500 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <Button
          onClick={handleBookClick}
          className="w-full bg-teal-500 hover:bg-teal-600 text-white mt-auto"
        >
          <Phone className="w-4 h-4 mr-2" />
          {language === 'ar' ? 'احجز عبر واتساب' : 'Book via WhatsApp'}
        </Button>
      </CardContent>
    </Card>
  );
}
