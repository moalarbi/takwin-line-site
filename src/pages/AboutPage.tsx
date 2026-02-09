import { Target, Eye, Award, Users, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function AboutPage() {
  const { language } = useLanguage();

  const values = [
    { icon: Award, titleAr: 'الالتزام', titleEn: 'Commitment', descAr: 'الالتزام بالمواعيد والجودة المتفق عليها', descEn: 'Commitment to agreed schedules and quality' },
    { icon: Target, titleAr: 'الدقة', titleEn: 'Precision', descAr: 'اهتمام بالتفاصيل في كل خدمة نقدمها', descEn: 'Attention to detail in every service we provide' },
    { icon: Users, titleAr: 'التنظيم', titleEn: 'Organization', descAr: 'تنسيق واضح وتنظيم فعال للخدمات', descEn: 'Clear coordination and effective service organization' },
    { icon: Check, titleAr: 'الاحترام', titleEn: 'Respect', descAr: 'احترام خصوصية العملاء وممتلكاتهم', descEn: 'Respecting customer privacy and property' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              {language === 'ar' ? 'من نحن' : 'About Us'}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {language === 'ar'
                ? 'تكوين لاين هي شركة سعودية متخصصة في خدمات التنظيف للمنازل والفلل والشركات في الرياض. نؤمن بأن النظافة أساس الراحة والصحة.'
                : 'TAKWIN LINE is a Saudi company specialized in cleaning services for homes, villas, and companies in Riyadh. We believe that cleanliness is the foundation of comfort and health.'}
            </p>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">
                {language === 'ar' ? 'قصتنا' : 'Our Story'}
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  {language === 'ar'
                    ? 'انطلقت تكوين لاين من رؤية واضحة: تقديم خدمات تنظيف احترافية بجودة عالية في الرياض. بدأنا كفريق صغير ونمونا لنصبح واحدة من الشركات الموثوقة في مجال التنظيف.'
                    : 'TAKWIN LINE started with a clear vision: to provide professional cleaning services with high quality in Riyadh. We started as a small team and grew to become one of the trusted companies in the cleaning field.'}
                </p>
                <p>
                  {language === 'ar'
                    ? 'نخدم اليوم مئات العملاء من الأفراد والشركات، ونفتخر بفريقنا المدرب الذي يصل إلى العملاء في الوقت المحدد مع الالتزام بأعلى معايير الجودة.'
                    : 'Today we serve hundreds of customers from individuals and companies, and we are proud of our trained team that arrives at customers on time while adhering to the highest quality standards.'}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <div className="text-3xl font-bold text-teal-500 mb-1">+1000</div>
                  <div className="text-sm text-slate-600">
                    {language === 'ar' ? 'عميل سعيد' : 'Happy Customers'}
                  </div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <div className="text-3xl font-bold text-teal-500 mb-1">+50</div>
                  <div className="text-sm text-slate-600">
                    {language === 'ar' ? 'عقد سنوي' : 'Annual Contracts'}
                  </div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <div className="text-3xl font-bold text-teal-500 mb-1">24/7</div>
                  <div className="text-sm text-slate-600">
                    {language === 'ar' ? 'دعم العملاء' : 'Customer Support'}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-slate-50 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-navy-900 mb-6">
                {language === 'ar' ? 'رسالتنا ورؤيتنا' : 'Our Mission & Vision'}
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-500 flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 mb-2">
                      {language === 'ar' ? 'رسالتنا' : 'Our Mission'}
                    </h4>
                    <p className="text-slate-600 text-sm">
                      {language === 'ar'
                        ? 'تقديم خدمات تنظيف منظمة بجودة عالية تلبي توقعات عملائنا وتتجاوزها.'
                        : 'Provide organized cleaning services with high quality that meet and exceed our customers\' expectations.'}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-navy-500 flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 mb-2">
                      {language === 'ar' ? 'رؤيتنا' : 'Our Vision'}
                    </h4>
                    <p className="text-slate-600 text-sm">
                      {language === 'ar'
                        ? 'أن نكون الخيار الموثوق الأول في الرياض للحجز المنظم والعقود السنوية في مجال التنظيف.'
                        : 'To be the first trusted choice in Riyadh for organized bookings and annual contracts in the cleaning field.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">
              {language === 'ar' ? 'قيمنا' : 'Our Values'}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-soft transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-teal-100 flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-teal-600" />
                </div>
                <h3 className="font-bold text-navy-900 mb-2">
                  {language === 'ar' ? value.titleAr : value.titleEn}
                </h3>
                <p className="text-slate-600 text-sm">
                  {language === 'ar' ? value.descAr : value.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">
              {language === 'ar' ? 'فريقنا' : 'Our Team'}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {language === 'ar'
                ? 'فريق مدرب بخبرة عالية في مجال التنظيف، يرتدي زي موحد ويخضع لإشراف ميداني دقيق'
                : 'A highly experienced team in the field of cleaning, wearing uniforms and under precise field supervision'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                titleAr: 'فرق مدربة',
                titleEn: 'Trained Teams',
                descAr: 'فرق عمل مدربة على أحدث تقنيات التنظيف واستخدام المعدات بشكل احترافي.',
                descEn: 'Work teams trained on the latest cleaning techniques and professional equipment use.',
              },
              {
                titleAr: 'زي موحد',
                titleEn: 'Uniform',
                descAr: 'جميع الفرق ترتدي زي موحد يعكس احترافية الشركة ويسهل التعرف عليها.',
                descEn: 'All teams wear uniforms that reflect the company\'s professionalism and make them easily identifiable.',
              },
              {
                titleAr: 'إشراف ميداني',
                titleEn: 'Field Supervision',
                descAr: 'مشرفون ميدانيون يتابعون جودة العمل ويضمنون رضا العملاء.',
                descEn: 'Field supervisors monitor work quality and ensure customer satisfaction.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-xl text-navy-900 mb-3">
                  {language === 'ar' ? item.titleAr : item.titleEn}
                </h3>
                <p className="text-slate-600">
                  {language === 'ar' ? item.descAr : item.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
