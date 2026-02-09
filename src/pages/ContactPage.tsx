import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { buildGeneralWhatsAppUrl } from '@/utils/whatsapp';

export function ContactPage() {
  const { language } = useLanguage();
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let whatsappMessage = '';
    if (language === 'ar') {
      whatsappMessage = `السلام عليكم،\nأنا ${name || 'عميل'}.\n${message}\n— تم الإرسال من موقع تكوين لاين`;
    } else {
      whatsappMessage = `Hi,\nI am ${name || 'a customer'}.\n${message}\n— Sent from TAKWIN LINE website`;
    }
    const url = `https://wa.me/966559466460?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: language === 'ar' ? 'الهاتف / واتساب' : 'Phone / WhatsApp',
      value: '0559466460',
      href: 'tel:+966559466460',
    },
    {
      icon: Mail,
      title: language === 'ar' ? 'البريد الإلكتروني' : 'Email',
      value: 'takwin.line@gmail.com',
      href: 'mailto:takwin.line@gmail.com',
    },
    {
      icon: MapPin,
      title: language === 'ar' ? 'الموقع' : 'Location',
      value: language === 'ar' ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia',
      href: '#',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {language === 'ar'
              ? 'نحن هنا لمساعدتك. تواصل معنا عبر واتساب أو البريد الإلكتروني وسنرد عليك في أقرب وقت.'
              : 'We are here to help. Contact us via WhatsApp or email and we will reply as soon as possible.'}
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-8">
                {language === 'ar' ? 'معلومات التواصل' : 'Contact Information'}
              </h2>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-teal-50 transition-colors group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-teal-100 group-hover:bg-teal-500 flex items-center justify-center transition-colors">
                      <item.icon className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">{item.title}</p>
                      <p className="font-semibold text-navy-900">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-10">
                <h3 className="font-bold text-navy-900 mb-4">
                  {language === 'ar' ? 'تابعنا على' : 'Follow Us On'}
                </h3>
                <a
                  href="https://www.tiktok.com/@takwin.line"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                  <span className="font-medium">TikTok @takwin.line</span>
                </a>
              </div>

              {/* Quick WhatsApp CTA */}
              <div className="mt-10 p-6 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl text-white">
                <h3 className="font-bold text-xl mb-2">
                  {language === 'ar' ? 'حجز سريع عبر واتساب' : 'Quick WhatsApp Booking'}
                </h3>
                <p className="text-white/90 mb-4">
                  {language === 'ar'
                    ? 'تواصل معنا مباشرة للحصول على استجابة فورية'
                    : 'Contact us directly for an immediate response'}
                </p>
                <Button
                  onClick={() => {
                    const url = buildGeneralWhatsAppUrl(language);
                    window.open(url, '_blank', 'noopener,noreferrer');
                  }}
                  className="bg-white text-teal-600 hover:bg-slate-100 rounded-full px-6"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {language === 'ar' ? 'فتح واتساب' : 'Open WhatsApp'}
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-soft">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-navy-900 mb-2">
                    {language === 'ar' ? 'أرسل رسالة' : 'Send a Message'}
                  </h2>
                  <p className="text-slate-600 mb-6">
                    {language === 'ar'
                      ? 'املأ النموذج وسيتم إرسال رسالتك عبر واتساب'
                      : 'Fill out the form and your message will be sent via WhatsApp'}
                  </p>

                  <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-navy-900 mb-2">
                        {language === 'ar' ? 'الاسم' : 'Name'}
                      </label>
                      <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={language === 'ar' ? 'أدخل اسمك' : 'Enter your name'}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-900 mb-2">
                        {language === 'ar' ? 'الرسالة' : 'Message'} <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={language === 'ar' ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                        required
                        minLength={10}
                        className="min-h-[150px]"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-teal-500 hover:bg-teal-600 text-white py-6 rounded-xl font-bold"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      {language === 'ar' ? 'إرسال عبر واتساب' : 'Send via WhatsApp'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
