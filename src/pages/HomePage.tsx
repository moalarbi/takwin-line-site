import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Check, MessageCircle, Users, Sparkles, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { BookingFunnel } from '@/components/BookingFunnel';
import { FAQAccordion } from '@/components/FAQAccordion';
import { ServiceCard } from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { services } from '@/data/services';
import { buildGeneralWhatsAppUrl } from '@/utils/whatsapp';

export function HomePage() {
  const { language, t, dir } = useLanguage();

  const handleWhatsAppClick = () => {
    const url = buildGeneralWhatsAppUrl(language);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const whyUsItems = [
    { icon: MessageCircle, text: t('whyus.coordination') },
    { icon: Users, text: t('whyus.flexible') },
    { icon: Shield, text: t('whyus.team') },
    { icon: Sparkles, text: t('whyus.detail') },
  ];

  const howItWorksSteps = [
    { number: '01', title: t('howitworks.step1'), desc: t('howitworks.step1_desc') },
    { number: '02', title: t('howitworks.step2'), desc: t('howitworks.step2_desc') },
    { number: '03', title: t('howitworks.step3'), desc: t('howitworks.step3_desc') },
  ];

  const featuredServices = services.filter(s => 
    ['home-cleaning', 'villa-cleaning', 'office-cleaning', 'annual-contract'].includes(s.id)
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-10 w-72 h-72 bg-teal-200 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-navy-200 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                {language === 'ar' ? 'حجز سهل عبر واتساب' : 'Easy booking via WhatsApp'}
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-6">
                {t('hero.title')}
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0">
                {t('hero.subtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-8 py-6 text-lg font-bold shadow-lg hover:shadow-xl transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {t('hero.cta_primary')}
                </Button>
                <Link to={`/${language}/services`}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white rounded-full px-8 py-6 text-lg font-bold transition-all"
                  >
                    {t('hero.cta_secondary')}
                    <ArrowRight className={`w-5 h-5 ${dir === 'rtl' ? 'mr-2' : 'ml-2'}`} />
                  </Button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-8">
                {[
                  language === 'ar' ? 'فريق مدرب' : 'Trained Team',
                  language === 'ar' ? 'مواد آمنة' : 'Safe Materials',
                  language === 'ar' ? 'ضمان الجودة' : 'Quality Guarantee',
                ].map((badge, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-teal-500" />
                    {badge}
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Funnel */}
            <div className="relative">
              <BookingFunnel />
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">
              {t('whyus.title')}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {language === 'ar'
                ? 'نفتخر بتقديم خدمات تنظيف احترافية تلبي احتياجات عملائنا في الرياض'
                : 'We pride ourselves on providing professional cleaning services that meet our customers\' needs in Riyadh'}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUsItems.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-50 hover:bg-teal-50 transition-colors group"
              >
                <div className="w-14 h-14 rounded-xl bg-teal-100 group-hover:bg-teal-500 flex items-center justify-center mb-4 transition-colors">
                  <item.icon className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors" />
                </div>
                <p className="font-semibold text-navy-900">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">
              {t('services.title')}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} compact />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to={`/${language}/services`}>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white rounded-full px-8"
              >
                {language === 'ar' ? 'عرض جميع الخدمات' : 'View All Services'}
                <ArrowRight className={`w-5 h-5 ${dir === 'rtl' ? 'mr-2' : 'ml-2'}`} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">
              {t('howitworks.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-white font-bold text-2xl">{step.number}</span>
                </div>
                <h3 className="font-bold text-xl text-navy-900 mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.desc}</p>
                
                {index < 2 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-full">
                    <ArrowRight className={`w-8 h-8 text-slate-300 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {language === 'ar' ? 'آراء عملائنا' : 'What Our Customers Say'}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: language === 'ar' ? 'أحمد السالم' : 'Ahmed Al-Salem',
                text: language === 'ar'
                  ? 'خدمة ممتازة وسرعة في الاستجابة. الفريق محترف ويستخدم مواد آمنة. أنصح بالتعامل معهم.'
                  : 'Excellent service and quick response. The team is professional and uses safe materials. I recommend dealing with them.',
              },
              {
                name: language === 'ar' ? 'سارة العتيبي' : 'Sarah Al-Otaibi',
                text: language === 'ar'
                  ? 'نظفوا الفلة بشكل رائع، ووصلوا في الوقت المحدد. أسعار منافسة وجودة عالية.'
                  : 'They cleaned the villa wonderfully and arrived on time. Competitive prices and high quality.',
              },
              {
                name: language === 'ar' ? 'محمد القحطاني' : 'Mohammed Al-Qahtani',
                text: language === 'ar'
                  ? 'عقد سنوي مع الشركة لنظافة المكتب. خدمة منتظمة وموثوقة. شكراً تكوين لاين.'
                  : 'Annual contract with the company for office cleaning. Regular and reliable service. Thanks TAKWIN LINE.',
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-gold-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/90 mb-4 leading-relaxed">{testimonial.text}</p>
                <p className="font-semibold text-teal-400">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-navy-900 mb-6">
            {language === 'ar'
              ? 'احجز الآن واستمتع بنظافة مثالية'
              : 'Book Now and Enjoy Perfect Cleanliness'}
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            {language === 'ar'
              ? 'فريقنا جاهز لخدمتك في الرياض. تواصل معنا عبر واتساب للحصول على عرض سعر أو حجز موعد.'
              : 'Our team is ready to serve you in Riyadh. Contact us via WhatsApp to get a quote or book an appointment.'}
          </p>
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-10 py-7 text-lg font-bold shadow-lg hover:shadow-xl transition-all"
          >
            <Phone className="w-6 h-6 mr-3" />
            {t('common.book_whatsapp')}
          </Button>
        </div>
      </section>
    </div>
  );
}
