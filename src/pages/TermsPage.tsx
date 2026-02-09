import { useLanguage } from '@/contexts/LanguageContext';

export function TermsPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              {language === 'ar' ? 'الشروط والأحكام' : 'Terms & Conditions'}
            </h1>
            <p className="text-xl text-white/80">
              {language === 'ar'
                ? 'يرجى قراءة هذه الشروط بعناية قبل استخدام خدماتنا'
                : 'Please read these terms carefully before using our services'}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {language === 'ar' ? (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">الحجز والتواصل</h2>
                  <p className="text-slate-600 leading-relaxed">
                    يتم الحجز عبر واتساب فقط على الرقم 0559466460. بعد إرسال تفاصيل الخدمة والعنوان، سيتم تأكيد الحجز مع تحديد الموعد المناسب.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">تنفيذ الخدمة</h2>
                  <p className="text-slate-600 leading-relaxed">
                    يتم تنفيذ الخدمة حسب الموعد المتفق عليه عبر واتساب وبحسب توفر الفرق.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">إعادة الجدولة والإلغاء</h2>
                  <p className="text-slate-600 leading-relaxed">
                    يمكن إعادة جدولة أو إلغاء الحجز قبل 24 ساعة من الموعد المحدد دون أي رسوم. للإلغاء في وقت أقرب، يرجى التواصل معنا عبر واتساب.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">متطلبات العميل</h2>
                  <p className="text-slate-600 leading-relaxed">
                    يتعهد العميل بتوفير:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 mt-2 space-y-2">
                    <li>الوصول إلى الموقع في الوقت المحدد</li>
                    <li>الماء والكهرباء اللازمين لأعمال التنظيف</li>
                    <li>إزالة الأشياء الثمينة أو الهشة من مناطق العمل</li>
                    <li>إبلاغنا بأي متطلبات خاصة قبل الوصول</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">الدفع</h2>
                  <p className="text-slate-600 leading-relaxed">
                    يتم الاتفاق على طريقة وشروط الدفع عبر واتساب حسب نوع الخدمة. للعقود السنوية، يمكن الدفع شهرياً أو ربع سنوي حسب الاتفاق.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">ضمان الجودة</h2>
                  <p className="text-slate-600 leading-relaxed">
                    نلتزم بتقديم خدمة عالية الجودة. إذا لم تكن راضياً عن الخدمة، يرجى إبلاغنا خلال 24 ساعة وسنعمل على إصلاح الأمر.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">التحديد من المسؤولية</h2>
                  <p className="text-slate-600 leading-relaxed">
                    نحن غير مسؤولين عن:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 mt-2 space-y-2">
                    <li>الأضرار الناتجة عن عيوب موجودة مسبقاً في الأثاث أو المباني</li>
                    <li>فقدان الأشياء الثمينة غير المبلغ عنها</li>
                    <li>التأخير بسبب ظروف خارجة عن إرادتنا (حوادث مرورية، أحوال جوية)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">تعديل الشروط</h2>
                  <p className="text-slate-600 leading-relaxed">
                    نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم نشر التغييرات على هذه الصفحة.
                  </p>
                  <p className="text-slate-500 mt-4 text-sm">
                    آخر تحديث: فبراير 2026
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Booking & Communication</h2>
                  <p className="text-slate-600 leading-relaxed">
                    Booking is via WhatsApp only at 0559466460. After sending service details and address, the booking will be confirmed with an agreed schedule.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Service Execution</h2>
                  <p className="text-slate-600 leading-relaxed">
                    Service is performed according to the agreed schedule via WhatsApp and based on team availability.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Rescheduling & Cancellation</h2>
                  <p className="text-slate-600 leading-relaxed">
                    You can reschedule or cancel the booking 24 hours before the scheduled time without any fees. For cancellation at a shorter notice, please contact us via WhatsApp.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Customer Requirements</h2>
                  <p className="text-slate-600 leading-relaxed">
                    The customer commits to providing:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 mt-2 space-y-2">
                    <li>Access to the site at the scheduled time</li>
                    <li>Water and electricity needed for cleaning work</li>
                    <li>Removing valuable or fragile items from work areas</li>
                    <li>Notifying us of any special requirements before arrival</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Payment</h2>
                  <p className="text-slate-600 leading-relaxed">
                    Payment method and terms are agreed upon via WhatsApp according to the service type. For annual contracts, payment can be made monthly or quarterly as agreed.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Quality Guarantee</h2>
                  <p className="text-slate-600 leading-relaxed">
                    We are committed to providing high-quality service. If you are not satisfied with the service, please notify us within 24 hours and we will work to fix the issue.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Limitation of Liability</h2>
                  <p className="text-slate-600 leading-relaxed">
                    We are not responsible for:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 mt-2 space-y-2">
                    <li>Damages resulting from pre-existing defects in furniture or buildings</li>
                    <li>Loss of valuable items not reported</li>
                    <li>Delays due to circumstances beyond our control (traffic accidents, weather conditions)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Terms Modification</h2>
                  <p className="text-slate-600 leading-relaxed">
                    We reserve the right to modify these terms at any time. Changes will be posted on this page.
                  </p>
                  <p className="text-slate-500 mt-4 text-sm">
                    Last updated: February 2026
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
