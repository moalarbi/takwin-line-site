import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, Phone, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { buildGeneralWhatsAppUrl } from '@/utils/whatsapp';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';

export function Header() {
  const { language, setLanguage, dir, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: `/${language}`, label: t('nav.home') },
    { path: `/${language}/about`, label: t('nav.about') },
    { path: `/${language}/services`, label: t('nav.services') },
    { path: `/${language}/b2b`, label: t('nav.b2b') },
    { path: `/${language}/contact`, label: t('nav.contact') },
  ];

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname === path + '/';
  };

  const toggleLanguage = () => {
    const newLang = language === 'ar' ? 'en' : 'ar';
    const currentPath = location.pathname;
    const newPath = currentPath.replace(/^\/(ar|en)/, `/${newLang}`);
    setLanguage(newLang);
    navigate(newPath);
  };

  const handleWhatsAppClick = () => {
    const url = buildGeneralWhatsAppUrl(language);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile: WhatsApp CTA (Left in RTL, Right in LTR) */}
          <div className="flex items-center md:hidden">
            <button
              onClick={handleWhatsAppClick}
              className="w-10 h-10 rounded-full bg-teal-500 hover:bg-teal-600 flex items-center justify-center text-white shadow-lg transition-all hover:scale-105"
              aria-label="WhatsApp"
            >
              <Phone className="w-5 h-5" />
            </button>
          </div>

          {/* Logo - Center on mobile, Left on desktop */}
          <Link
            to={`/${language}`}
            className="flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-navy-900 to-teal-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">TL</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-navy-900 text-lg leading-tight block">
                {language === 'ar' ? 'تكوين لاين' : 'TAKWIN LINE'}
              </span>
              <span className="text-xs text-teal-600 font-medium">
                {language === 'ar' ? 'خدمات التنظيف' : 'Cleaning Services'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive(item.path)
                    ? 'text-teal-600 bg-teal-50'
                    : 'text-slate-600 hover:text-navy-900 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop: Language Switch + WhatsApp CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-600 hover:text-navy-900 hover:bg-slate-50 transition-all flex items-center gap-1"
              aria-label="Switch Language"
            >
              {language === 'ar' ? 'English' : 'العربية'}
              <ChevronDown className="w-4 h-4" />
            </button>
            <Button
              onClick={handleWhatsAppClick}
              className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-5 py-2 flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">{t('common.book_whatsapp')}</span>
            </Button>
          </div>

          {/* Mobile: Burger Menu (Right in RTL, Left in LTR) */}
          <div className="flex items-center md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors"
                  aria-label="Menu"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side={dir === 'rtl' ? 'right' : 'left'} className="w-[280px] bg-white">
                <div className="flex flex-col h-full pt-8">
                  {/* Mobile Logo */}
                  <div className="flex items-center gap-3 mb-8 px-2">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-navy-900 to-teal-600 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">TL</span>
                    </div>
                    <div>
                      <span className="font-bold text-navy-900 text-lg block">
                        {language === 'ar' ? 'تكوين لاين' : 'TAKWIN LINE'}
                      </span>
                      <span className="text-xs text-teal-600">
                        {language === 'ar' ? 'خدمات التنظيف' : 'Cleaning Services'}
                      </span>
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col gap-1">
                    {navItems.map((item) => (
                      <SheetClose asChild key={item.path}>
                        <Link
                          to={item.path}
                          className={`px-4 py-3 rounded-lg text-base font-medium transition-all ${
                            isActive(item.path)
                              ? 'text-teal-600 bg-teal-50'
                              : 'text-slate-700 hover:text-navy-900 hover:bg-slate-50'
                          }`}
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>

                  {/* Mobile Language Switch */}
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <button
                      onClick={() => {
                        toggleLanguage();
                        setIsOpen(false);
                      }}
                      className="w-full px-4 py-3 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 transition-all flex items-center justify-between"
                    >
                      <span>{language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}</span>
                      <ChevronDown className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Mobile WhatsApp CTA */}
                  <div className="mt-auto pb-6">
                    <SheetClose asChild>
                      <Button
                        onClick={handleWhatsAppClick}
                        className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-xl py-4 flex items-center justify-center gap-3 shadow-lg"
                      >
                        <Phone className="w-5 h-5" />
                        <span className="text-base font-medium">{t('common.book_whatsapp')}</span>
                      </Button>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
