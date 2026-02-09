import { useState } from 'react';
import { Building2, Check, ArrowRight, Phone, FileText, Calendar, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { buildB2BWhatsAppUrl } from '@/utils/whatsapp';

export function B2BPage() {
  const { language, dir } = useLanguage();
  const [facilityType, setFacilityType] = useState('');
  const [area, setArea] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (facilityType && area && location) {
      const url = buildB2BWhatsAppUrl(facilityType, area, location, language);
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const benefits = [
    { icon: Calendar, textAr: 'زيارات منتظمة حسب الجدول المتفق عليه', textEn: 'Regular visits according to agreed schedule' },
    { icon: FileText, textAr: 'عقود مرنة تناسب احتياج عملك', textEn: 'Flexible contracts to suit your business needs' },
    { icon: Users, textAr: 'فريق مخصص لمنشأتك', textEn: 'Dedicated team for your facility' },
    { icon: Check, textAr: 'تقارير دورية عن جودة العمل', textEn: 'Periodic reports on work quality' },
  ];

  const targetClients = [
    language === 'ar' ? 'المكاتب والشركات' : 'Offices & Companies',
    language === 'ar' ? 'العيادات والمراكز الصحية' : 'Clinics & Health Centers',
    language === 'ar' ? 'المدارس والجامعات' : 'Schools & Universities',
    language === 'ar' ? 'المولات والمراكز التجارية' : 'Malls & Shopping Centers',
    language === 'ar' ? 'ال compounds السكنية' : 'Residential Compounds',
    language === 'ar' ? 'المستودعات والمصانع' : 'Warehouses & Factories',
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-teal-300 text-sm font-medium mb-6">
              <Building2 className="w-4 h-4" />
              {language === 'ar' ? 'للشركات والمؤسسات' : 'For Companies & Institutions'}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              {language === 'ar' ? 'عقود التنظيف السنوية للشركات' : 'Annual Cleaning Contracts for Companies'}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {language === 'ar'
                ? 'حلول تنظيف احترافية للمؤسسات والشركات في الرياض. عقود سنوية مرنة مع فرق عمل مدربة وإشراف ميداني.'
                : 'Professional cleaning solutions for institutions and companies in Riyadh. Flexible annual contracts with trained work teams and field supervision.'}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">
              {language === 'ar' ? 'مميزات العقود السنوية' : 'Annual Contract Benefits'}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-soft transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-teal-100 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-teal-600" />
                  </div>
                  <p className="font-medium text-navy-900">
                    {language === 'ar' ? benefit.textAr : benefit.textEn}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Clients */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">
                {language === 'ar' ? 'من يمكنه الاستفادة من عقودنا؟' : 'Who Can Benefit from Our Contracts?'}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {targetClients.map((client, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-xs"
                  >
                    <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-teal-600" />
                    </div>
                    <span className="font-medium text-navy-900">{client}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-soft">
              <h3 className="text-xl font-bold text-navy-900 mb-6">
                {language === 'ar' ? 'اطلب عرض سعر' : 'Request a Quote'}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-2">
                    {language === 'ar' ? 'نوع المنشأة' : 'Facility Type'}
                  </label>
                  <Input
                    value={facilityType}
                    onChange={(e) => setFacilityType(e.target.value)}
                    placeholder={language === 'ar' ? 'مثال: مكتب، عيادة، مدرسة' : 'e.g., Office, Clinic, School'}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-2">
                    {language === 'ar' ? 'المساحة التقريبية' : 'Approximate Area'}
                  </label>
                  <Input
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    placeholder={language === 'ar' ? 'مثال: 500 متر مربع' : 'e.g., 500 sqm'}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-2">
                    {language === 'ar' ? 'الموقع' : 'Location'}
                  </label>
                  <Textarea
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder={language === 'ar' ? 'مثال: حي العليا، الرياض' : 'e.g., Al Olaya District, Riyadh'}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white py-6 rounded-xl font-bold"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {language === 'ar' ? 'اطلب عبر واتساب' : 'Request via WhatsApp'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">
              {language === 'ar' ? 'خطوات التعاقد' : 'Contract Process'}
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                titleAr: 'تواصل معنا',
                titleEn: 'Contact Us',
                descAr: 'أرسل تفاصيل منشأتك عبر واتساب',
                descEn: 'Send your facility details via WhatsApp',
              },
              {
                step: '02',
                titleAr: 'معاينة مجانية',
                titleEn: 'Free Inspection',
                descAr: 'نقوم بمعاينة الموقع وتقييم الاحتياجات',
                descEn: 'We inspect the site and assess needs',
              },
              {
                step: '03',
                titleAr: 'عرض سعر',
                titleEn: 'Quote',
                descAr: 'نرسل عرض سعر منافس خلال 24 ساعة',
                descEn: 'We send a competitive quote within 24 hours',
              },
              {
                step: '04',
                titleAr: 'بدء العمل',
                titleEn: 'Start Work',
                descAr: 'بعد الاتفاق، نبدأ العمل في الوقت المحدد',
                descEn: 'After agreement, we start work on time',
              },
            ].map((item, index) => (
              <div key={index} className="relative text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white font-bold">{item.step}</span>
                </div>
                <h3 className="font-bold text-lg text-navy-900 mb-2">
                  {language === 'ar' ? item.titleAr : item.titleEn}
                </h3>
                <p className="text-slate-600 text-sm">
                  {language === 'ar' ? item.descAr : item.descEn}
                </p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full">
                    <ArrowRight className={`w-6 h-6 text-slate-300 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
