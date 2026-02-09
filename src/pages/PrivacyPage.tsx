import { useLanguage } from '@/contexts/LanguageContext';

export function PrivacyPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </h1>
            <p className="text-xl text-white/80">
              {language === 'ar'
                ? 'نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية'
                : 'We respect your privacy and are committed to protecting your personal data'}
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
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">مقدمة</h2>
                  <p className="text-slate-600 leading-relaxed">
                    تلتزم تكوين لاين بحماية خصوصية عملائها وزوار موقعها. هذه السياسة توضح كيفية جمع واستخدام وحماية المعلومات الشخصية.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">جمع المعلومات</h2>
                  <p className="text-slate-600 leading-relaxed">
                    نجمع المعلومات التالية عند استخدامك لموقعنا:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 mt-2 space-y-2">
                    <li>معلومات الاتصال (الاسم، رقم الهاتف، العنوان) - عندما تقدمها لنا عبر نموذج الحجز</li>
                    <li>معلومات الجهاز والمتصفح - تلقائياً لتحسين تجربة المستخدم</li>
                    <li>بيانات الاستخدام - لتحليل كيفية تفاعلك مع الموقع</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">استخدام المعلومات</h2>
                  <p className="text-slate-600 leading-relaxed">
                    نستخدم المعلومات للأغراض التالية:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 mt-2 space-y-2">
                    <li>التواصل معك بخصوص طلبات الحجز والاستفسارات</li>
                    <li>تقديم خدمات التنظيف المطلوبة</li>
                    <li>تحسين موقعنا وخدماتنا</li>
                    <li>إرسال العروض والتحديثات (بموافقتك)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">ملفات تعريف الارتباط (Cookies)</h2>
                  <p className="text-slate-600 leading-relaxed">
                    نستخدم ملفات تعريف الارتباط لتحسين تجربة التصفح وتحليل حركة المرور على الموقع. يمكنك تعطيلها من إعدادات المتصفح.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">حماية البيانات</h2>
                  <p className="text-slate-600 leading-relaxed">
                    نتخذ إجراءات أمنية مناسبة لحماية بياناتك من الوصول غير المصرح به أو التعديل أو الإفصاح.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">عدم بيع البيانات</h2>
                  <p className="text-slate-600 leading-relaxed">
                    نحن لا نبيع أو نؤجر أو نتاجر بمعلوماتك الشخصية لأطراف ثالثة.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">التواصل معنا</h2>
                  <p className="text-slate-600 leading-relaxed">
                    إذا كان لديك أي استفسار حول سياسة الخصوصية، يمكنك التواصل معنا عبر:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 mt-2 space-y-2">
                    <li>واتساب: 0559466460</li>
                    <li>البريد الإلكتروني: takwin.line@gmail.com</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">تحديثات السياسة</h2>
                  <p className="text-slate-600 leading-relaxed">
                    قد نقوم بتحديث هذه السياسة من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة.
                  </p>
                  <p className="text-slate-500 mt-4 text-sm">
                    آخر تحديث: فبراير 2026
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Introduction</h2>
                  <p className="text-slate-600 leading-relaxed">
                    TAKWIN LINE is committed to protecting the privacy of its customers and website visitors. This policy explains how we collect, use, and protect personal information.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Information Collection</h2>
                  <p className="text-slate-600 leading-relaxed">
                    We collect the following information when you use our website:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 mt-2 space-y-2">
                    <li>Contact information (name, phone number, address) - when you provide it via the booking form</li>
                    <li>Device and browser information - automatically to improve user experience</li>
                    <li>Usage data - to analyze how you interact with the website</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Use of Information</h2>
                  <p className="text-slate-600 leading-relaxed">
                    We use the information for the following purposes:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 mt-2 space-y-2">
                    <li>Communicating with you regarding booking requests and inquiries</li>
                    <li>Providing the requested cleaning services</li>
                    <li>Improving our website and services</li>
                    <li>Sending offers and updates (with your consent)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Cookies</h2>
                  <p className="text-slate-600 leading-relaxed">
                    We use cookies to improve browsing experience and analyze website traffic. You can disable them from your browser settings.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Data Protection</h2>
                  <p className="text-slate-600 leading-relaxed">
                    We take appropriate security measures to protect your data from unauthorized access, modification, or disclosure.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">No Data Selling</h2>
                  <p className="text-slate-600 leading-relaxed">
                    We do not sell, rent, or trade your personal information to third parties.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Contact Us</h2>
                  <p className="text-slate-600 leading-relaxed">
                    If you have any questions about this privacy policy, you can contact us via:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 mt-2 space-y-2">
                    <li>WhatsApp: 0559466460</li>
                    <li>Email: takwin.line@gmail.com</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Policy Updates</h2>
                  <p className="text-slate-600 leading-relaxed">
                    We may update this policy from time to time. Any changes will be posted on this page.
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
