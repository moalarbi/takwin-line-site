import { useLanguage } from '@/contexts/LanguageContext';
import { ServiceCard } from '@/components/ServiceCard';
import { services } from '@/data/services';
import { Phone, Building2, Bug, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { buildGeneralWhatsAppUrl } from '@/utils/whatsapp';

export function ServicesPage() {
  const { language } = useLanguage();

  const cleaningServices = services.filter(s => 
    ['home-cleaning', 'villa-cleaning', 'post-construction', 'upholstery-cleaning', 
     'floor-cleaning', 'facade-cleaning', 'tank-cleaning', 'pool-cleaning', 
     'chandelier-cleaning', 'office-cleaning', 'housekeeping'].includes(s.id)
  );

  const pestServices = services.filter(s => 
    ['pest-control', 'termite-control', 'fumigation', 'animal-control'].includes(s.id)
  );

  const supplyServices = services.filter(s => 
    ['cleaning-supplies', 'drainage'].includes(s.id)
  );

  const handleWhatsAppClick = () => {
    const url = buildGeneralWhatsAppUrl(language);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            {language === 'ar' ? 'خدماتنا' : 'Our Services'}
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {language === 'ar'
              ? 'نقدم مجموعة شاملة من خدمات التنظيف للمنازل والشركات في الرياض'
              : 'We offer a comprehensive range of cleaning services for homes and businesses in Riyadh'}
          </p>
        </div>
      </section>

      {/* Cleaning Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 rounded-xl bg-teal-100 flex items-center justify-center">
              <Building2 className="w-7 h-7 text-teal-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                {language === 'ar' ? 'خدمات التنظيف العام والمتخصص' : 'General & Specialized Cleaning Services'}
              </h2>
              <p className="text-slate-600">
                {language === 'ar' ? 'تنظيف شامل لجميع أنواع المباني والمرافق' : 'Comprehensive cleaning for all types of buildings and facilities'}
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cleaningServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Pest Control Services */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 rounded-xl bg-red-100 flex items-center justify-center">
              <Bug className="w-7 h-7 text-red-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                {language === 'ar' ? 'مكافحة الحشرات والآفات' : 'Pest Control'}
              </h2>
              <p className="text-slate-600">
                {language === 'ar' ? 'حلول فعالة للتخلص من الحشرات والآفات' : 'Effective solutions to get rid of pests and insects'}
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pestServices.map((service) => (
              <ServiceCard key={service.id} service={service} compact />
            ))}
          </div>
        </div>
      </section>

      {/* Supplies & Other Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 rounded-xl bg-gold-100 flex items-center justify-center">
              <Package className="w-7 h-7 text-gold-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                {language === 'ar' ? 'المواد والمستلزمات والخدمات الصحية' : 'Supplies & Sanitary Services'}
              </h2>
              <p className="text-slate-600">
                {language === 'ar' ? 'توريد المواد وخدمات الصرف الصحي' : 'Supply of materials and sanitary services'}
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
            {supplyServices.map((service) => (
              <ServiceCard key={service.id} service={service} compact />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-teal-500 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            {language === 'ar'
              ? 'هل تحتاج إلى خدمة غير مذكورة؟'
              : 'Need a service not listed?'}
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            {language === 'ar'
              ? 'تواصل معنا عبر واتساب وسنكون سعداء بمساعدتك في أي خدمة تنظيف تحتاجها.'
              : 'Contact us via WhatsApp and we will be happy to help you with any cleaning service you need.'}
          </p>
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-white text-teal-600 hover:bg-slate-100 rounded-full px-10 py-7 text-lg font-bold shadow-lg"
          >
            <Phone className="w-6 h-6 mr-3" />
            {language === 'ar' ? 'تواصل عبر واتساب' : 'Contact via WhatsApp'}
          </Button>
        </div>
      </section>
    </div>
  );
}
