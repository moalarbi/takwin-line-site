import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dir: 'rtl' | 'ltr';
  t: (key: string) => string;
}

const translations = {
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'خدماتنا',
    'nav.b2b': 'عقود الشركات',
    'nav.contact': 'تواصل معنا',
    
    // Common
    'common.book_whatsapp': 'احجز عبر واتساب',
    'common.call_now': 'اتصل الآن',
    'common.send': 'إرسال',
    'common.close': 'إغلاق',
    'common.loading': 'جاري التحميل...',
    'common.required': 'مطلوب',
    'common.optional': 'اختياري',
    'common.individual': 'فرد',
    'common.company': 'شركة',
    'common.select': 'اختر',
    'common.address': 'العنوان',
    'common.preferred_time': 'الوقت المفضل',
    'common.not_specified': 'غير محدد',
    'common.riyadh': 'الرياض',
    'common.saudi_arabia': 'المملكة العربية السعودية',
    
    // Hero
    'hero.title': 'تنظيف منازل وفلل في الرياض — حجز سريع عبر واتساب',
    'hero.subtitle': 'اختر (شركة/فرد)، حدد الخدمة، اكتب عنوانك… واضغط حجز.',
    'hero.cta_primary': 'احجز عبر واتساب',
    'hero.cta_secondary': 'استعرض خدماتنا',
    
    // Funnel
    'funnel.step1_title': 'اختر نوع العميل',
    'funnel.step2_title': 'اختر الخدمات المطلوبة',
    'funnel.step3_title': 'أدخل التفاصيل',
    'funnel.select_services': 'اختر خدمة واحدة على الأقل',
    'funnel.enter_address': 'أدخل عنوانك في الرياض',
    'funnel.address_placeholder': 'مثال: حي النرجس، شارع الأمير محمد',
    'funnel.time_placeholder': 'مثال: اليوم الساعة ٤ مساءً',
    'funnel.error_type': 'يرجى اختيار نوع العميل',
    'funnel.error_services': 'يرجى اختيار خدمة واحدة على الأقل',
    'funnel.error_address': 'يرجى إدخال عنوان صحيح (٨ أحرف على الأقل)',
    
    // Why Us
    'whyus.title': 'لماذا تكوين لاين؟',
    'whyus.coordination': 'تنسيق سريع وسهل عبر واتساب',
    'whyus.flexible': 'جدولة مرنة حسب توفر الفرق',
    'whyus.solutions': 'حلول للأفراد + عقود سنوية للشركات',
    'whyus.team': 'فرق عمل بزي موحد وإشراف ميداني',
    'whyus.detail': 'تنظيف عميق واهتمام بالتفاصيل',
    
    // How it Works
    'howitworks.title': 'كيف يعمل الحجز؟',
    'howitworks.step1': 'اختر الخدمة',
    'howitworks.step1_desc': 'حدد نوع العميل والخدمات المطلوبة',
    'howitworks.step2': 'أرسل التفاصيل',
    'howitworks.step2_desc': 'اكتب عنوانك والوقت المفضل',
    'howitworks.step3': 'استلم الفريق',
    'howitworks.step3_desc': 'يتم تنفيذ الخدمة حسب الموعد المتفق عليه',
    
    // FAQ
    'faq.title': 'الأسئلة الشائعة',
    'faq.q1': 'كيف يتم تحديد موعد الخدمة؟',
    'faq.a1': 'يتم تنسيق الموعد المناسب حسب توفر الفرق وموقع العميل، ويتم التأكيد عبر واتساب.',
    'faq.q2': 'هل تقدمون عقود للشركات؟',
    'faq.a2': 'نعم، نقدم عقود تنظيف سنوية للشركات والمؤسسات بأسعار تنافسية.',
    'faq.q3': 'كيف يتم الحجز؟',
    'faq.a3': 'الحجز عبر واتساب فقط. اختر خدماتك، أرسل العنوان، وسيتم تنفيذ الخدمة حسب الموعد المتفق عليه.',
    'faq.q4': 'هل توجد زيارات يومية للأفراد؟',
    'faq.a4': 'نعم، نقدم زيارات يومية وأسبوعية للمنازل حسب احتياجك.',
    
    // Footer
    'footer.quick_links': 'روابط سريعة',
    'footer.contact': 'تواصل معنا',
    'footer.follow_us': 'تابعنا',
    'footer.rights': 'جميع الحقوق محفوظة',
    
    // Contact
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'نحن هنا لمساعدتك. تواصل معنا عبر واتساب أو البريد الإلكتروني.',
    'contact.phone': 'الهاتف / واتساب',
    'contact.email': 'البريد الإلكتروني',
    'contact.location': 'الموقع',
    
    // B2B
    'b2b.title': 'عقود التنظيف السنوية للشركات',
    'b2b.subtitle': 'حلول تنظيف احترافية للمؤسسات والشركات في الرياض',
    'b2b.cta': 'اطلب عرض سعر',
    
    // Services
    'services.title': 'خدماتنا',
    'services.subtitle': 'نقدم مجموعة شاملة من خدمات التنظيف للمنازل والشركات',
    'services.suitable_for': 'مناسب لـ',
    'services.book_service': 'احجز هذه الخدمة',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.b2b': 'B2B Contracts',
    'nav.contact': 'Contact',
    
    // Common
    'common.book_whatsapp': 'Book via WhatsApp',
    'common.call_now': 'Call Now',
    'common.send': 'Send',
    'common.close': 'Close',
    'common.loading': 'Loading...',
    'common.required': 'Required',
    'common.optional': 'Optional',
    'common.individual': 'Individual',
    'common.company': 'Company',
    'common.select': 'Select',
    'common.address': 'Address',
    'common.preferred_time': 'Preferred Time',
    'common.not_specified': 'Not specified',
    'common.riyadh': 'Riyadh',
    'common.saudi_arabia': 'Saudi Arabia',
    
    // Hero
    'hero.title': 'Home & Villa Cleaning in Riyadh — Quick WhatsApp Booking',
    'hero.subtitle': 'Choose (Company/Individual), select service, enter your address… and book.',
    'hero.cta_primary': 'Book via WhatsApp',
    'hero.cta_secondary': 'View Our Services',
    
    // Funnel
    'funnel.step1_title': 'Select Customer Type',
    'funnel.step2_title': 'Select Required Services',
    'funnel.step3_title': 'Enter Details',
    'funnel.select_services': 'Select at least one service',
    'funnel.enter_address': 'Enter your address in Riyadh',
    'funnel.address_placeholder': 'e.g., Al Narjis District, Prince Mohammed St.',
    'funnel.time_placeholder': 'e.g., Today at 4 PM',
    'funnel.error_type': 'Please select customer type',
    'funnel.error_services': 'Please select at least one service',
    'funnel.error_address': 'Please enter a valid address (at least 8 characters)',
    
    // Why Us
    'whyus.title': 'Why TAKWIN LINE?',
    'whyus.coordination': 'Quick and easy coordination via WhatsApp',
    'whyus.flexible': 'Flexible scheduling based on team availability',
    'whyus.solutions': 'Solutions for individuals + annual contracts for companies',
    'whyus.team': 'Uniformed teams with field supervision',
    'whyus.detail': 'Deep cleaning with attention to detail',
    
    // How it Works
    'howitworks.title': 'How to Book?',
    'howitworks.step1': 'Choose Service',
    'howitworks.step1_desc': 'Select customer type and required services',
    'howitworks.step2': 'Send Details',
    'howitworks.step2_desc': 'Write your address and preferred time',
    'howitworks.step3': 'Receive Team',
    'howitworks.step3_desc': 'Service is performed according to the agreed schedule',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'How is the service appointment determined?',
    'faq.a1': 'The appropriate appointment is coordinated based on team availability and customer location, and confirmed via WhatsApp.',
    'faq.q2': 'Do you offer contracts for companies?',
    'faq.a2': 'Yes, we offer annual cleaning contracts for companies and institutions at competitive prices.',
    'faq.q3': 'How do I book?',
    'faq.a3': 'Booking is via WhatsApp only. Choose your services, send the address, and service will be performed according to the agreed schedule.',
    'faq.q4': 'Are there daily visits for individuals?',
    'faq.a4': 'Yes, we offer daily and weekly visits for homes according to your needs.',
    
    // Footer
    'footer.quick_links': 'Quick Links',
    'footer.contact': 'Contact Us',
    'footer.follow_us': 'Follow Us',
    'footer.rights': 'All rights reserved',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We are here to help. Contact us via WhatsApp or email.',
    'contact.phone': 'Phone / WhatsApp',
    'contact.email': 'Email',
    'contact.location': 'Location',
    
    // B2B
    'b2b.title': 'Annual Cleaning Contracts for Companies',
    'b2b.subtitle': 'Professional cleaning solutions for institutions and companies in Riyadh',
    'b2b.cta': 'Request a Quote',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'We offer a comprehensive range of cleaning services for homes and businesses',
    'services.suitable_for': 'Suitable for',
    'services.book_service': 'Book this service',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('takwin-language') as Language;
      return saved || 'ar';
    }
    return 'ar';
  });

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    localStorage.setItem('takwin-language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
    
    // Update meta tags
    const title = document.querySelector('title');
    const metaDesc = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    
    if (language === 'ar') {
      if (title) title.textContent = 'تنظيف منازل وفلل في الرياض | تكوين لاين - TAKWIN LINE';
      if (metaDesc) metaDesc.setAttribute('content', 'احجز تنظيف منازل وفلل في الرياض عبر واتساب. اختر شركة أو فرد، حدد الخدمة، واكتب العنوان.');
      if (ogTitle) ogTitle.setAttribute('content', 'تنظيف منازل وفلل في الرياض | تكوين لاين - TAKWIN LINE');
      if (ogDesc) ogDesc.setAttribute('content', 'احجز تنظيف منازل وفلل في الرياض عبر واتساب. اختر شركة أو فرد، حدد الخدمة، واكتب العنوان.');
      if (ogLocale) ogLocale.setAttribute('content', 'ar_SA');
    } else {
      if (title) title.textContent = 'Home & Villa Cleaning in Riyadh | TAKWIN LINE';
      if (metaDesc) metaDesc.setAttribute('content', 'Book home & villa cleaning in Riyadh via WhatsApp. Choose individual or company, select services, and enter your address.');
      if (ogTitle) ogTitle.setAttribute('content', 'Home & Villa Cleaning in Riyadh | TAKWIN LINE');
      if (ogDesc) ogDesc.setAttribute('content', 'Book home & villa cleaning in Riyadh via WhatsApp. Choose individual or company, select services, and enter your address.');
      if (ogLocale) ogLocale.setAttribute('content', 'en_US');
    }
  }, [language, dir]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.ar] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dir, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
