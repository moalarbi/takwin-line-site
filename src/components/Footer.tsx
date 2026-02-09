import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { buildGeneralWhatsAppUrl } from '@/utils/whatsapp';

export function Footer() {
  const { language, t } = useLanguage();

  const quickLinks = [
    { path: `/${language}`, label: t('nav.home') },
    { path: `/${language}/about`, label: t('nav.about') },
    { path: `/${language}/services`, label: t('nav.services') },
    { path: `/${language}/b2b`, label: t('nav.b2b') },
    { path: `/${language}/contact`, label: t('nav.contact') },
  ];

  const legalLinks = [
    { path: `/${language}/privacy`, label: language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy' },
    { path: `/${language}/terms`, label: language === 'ar' ? 'الشروط والأحكام' : 'Terms & Conditions' },
  ];

  const handleWhatsAppClick = () => {
    const url = buildGeneralWhatsAppUrl(language);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">TL</span>
              </div>
              <div>
                <span className="font-bold text-white text-xl block">
                  {language === 'ar' ? 'تكوين لاين' : 'TAKWIN LINE'}
                </span>
                <span className="text-sm text-slate-400">
                  {language === 'ar' ? 'خدمات التنظيف' : 'Cleaning Services'}
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {language === 'ar'
                ? 'نقدم خدمات تنظيف احترافية للمنازل والفلل والشركات في الرياض. حجز سريع عبر واتساب مع وصول خلال ساعة.'
                : 'We provide professional cleaning services for homes, villas, and companies in Riyadh. Quick booking via WhatsApp with arrival within 1 hour.'}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.tiktok.com/@takwin.line"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-teal-500 flex items-center justify-center transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
              <button
                onClick={handleWhatsAppClick}
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-teal-500 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white text-lg mb-6">{t('footer.quick_links')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-bold text-white text-lg mb-6">
              {language === 'ar' ? 'معلومات قانونية' : 'Legal Information'}
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-white text-lg mb-6">{t('footer.contact')}</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+966559466460"
                  className="flex items-center gap-3 text-slate-400 hover:text-teal-400 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">{t('contact.phone')}</span>
                    <span className="text-sm">0559466460</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:takwin.line@gmail.com"
                  className="flex items-center gap-3 text-slate-400 hover:text-teal-400 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">{t('contact.email')}</span>
                    <span className="text-sm">takwin.line@gmail.com</span>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-slate-400">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">{t('contact.location')}</span>
                    <span className="text-sm">{t('common.riyadh')}, {t('common.saudi_arabia')}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} {language === 'ar' ? 'تكوين لاين' : 'TAKWIN LINE'}. {t('footer.rights')}.
            </p>
            <p className="text-slate-600 text-xs">
              {language === 'ar' ? 'خدمات التنظيف في الرياض' : 'Cleaning Services in Riyadh'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
